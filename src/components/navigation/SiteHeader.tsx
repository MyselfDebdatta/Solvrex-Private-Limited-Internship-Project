import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

import { cn } from "@/lib/utils";
import { useScrolled } from "@/lib/motion";
import { primaryNav } from "@/data/site";
import { ActionLink } from "@/components/common/Action";
import { Logo } from "@/components/navigation/Logo";

export function SiteHeader() {
  const scrolled = useScrolled(16);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const isHome = pathname === "/";
  const isTransparent = isHome && !scrolled;

  // Close the drawer on route change.
  useEffect(() => setOpen(false), [pathname]);

  // Lock scroll and wire escape / focus handling while the drawer is open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector<HTMLElement>("a, button")?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusables = panelRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      if (focusables.length === 0) return;
      const first = focusables[0]!;
      const last = focusables[focusables.length - 1]!;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isTransparent
            ? "border-b border-transparent bg-background/0"
            : "border-b border-border bg-background/92 backdrop-blur-md",
        )}
      >
        <div
          className={cn(
            "shell grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 transition-all duration-500",
            scrolled ? "h-16 lg:h-18" : "h-20 lg:h-24",
          )}
        >
          <Logo className="min-w-0" tone={isTransparent ? "inverse" : "default"} />

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ "data-active": "true" }}
                className={cn(
                  "relative px-3 py-2 text-[0.8125rem] font-medium transition-colors",
                  isTransparent
                    ? "text-primary-foreground/90 hover:text-primary-foreground data-[active=true]:text-primary-foreground"
                    : "text-foreground/72 hover:text-primary data-[active=true]:text-primary",
                  "after:absolute after:bottom-1 after:left-3 after:h-px after:w-[calc(100%-1.5rem)] after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300",
                  "data-[active=true]:after:scale-x-100",
                )}
              >
                {item.label}
              </Link>
            ))}
            <ActionLink
              to="/donate"
              variant="primary"
              size="sm"
              className="ml-3 tracking-[0.08em] uppercase"
            >
              Donate
            </ActionLink>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <ActionLink
              to="/donate"
              variant="primary"
              size="sm"
              className="tracking-[0.08em] uppercase"
            >
              Donate
            </ActionLink>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              aria-label="Open navigation menu"
              className={cn(
                "grid min-h-11 min-w-11 place-items-center border transition-colors",
                isTransparent
                  ? "border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                  : "border-border text-primary hover:bg-secondary",
              )}
            >
              <Menu aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen mobile drawer */}
      {open && typeof document !== "undefined" && createPortal(
        <div
          id="mobile-navigation"
          ref={panelRef}
          className="fixed inset-0 z-[100] flex flex-col bg-primary text-primary-foreground lg:hidden"
        >
          <div className="shell flex h-20 items-center justify-between">
            <Logo tone="inverse" />
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                triggerRef.current?.focus();
              }}
              aria-label="Close navigation menu"
              className="grid min-h-11 min-w-11 place-items-center border border-primary-foreground/25 transition-colors hover:bg-primary-foreground/10"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>

          <nav aria-label="Mobile primary" className="shell flex-1 overflow-y-auto py-6">
            <ul className="flex flex-col">
              {primaryNav.map((item, index) => (
                <li key={item.to} className="border-b border-primary-foreground/12">
                  <Link
                    to={item.to}
                    activeOptions={{ exact: item.to === "/" }}
                    activeProps={{ "data-active": "true" }}
                    onClick={() => setOpen(false)}
                    className="group flex items-baseline justify-between py-5 data-[active=true]:text-primary-foreground"
                  >
                    <span className="display-md">{item.label}</span>
                    <span className="flex items-center gap-3 text-[0.6875rem] tracking-[0.16em] text-primary-foreground/45 uppercase">
                      <span
                        aria-hidden="true"
                        className="hidden size-1.5 rounded-full bg-accent group-data-[active=true]:block"
                      />
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-3 pb-10 sm:grid-cols-2">
              <ActionLink
                to="/donate"
                variant="solidInverse"
                size="lg"
                onClick={() => setOpen(false)}
                className="tracking-[0.08em] uppercase"
              >
                Donate
              </ActionLink>
              <ActionLink 
                to="/get-involved" 
                variant="inverse" 
                size="lg"
                onClick={() => setOpen(false)}
              >
                Get involved
              </ActionLink>
            </div>
          </nav>
        </div>,
        document.body
      )}
    </>
  );
}
