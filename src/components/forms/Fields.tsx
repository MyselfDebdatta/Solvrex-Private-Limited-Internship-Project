import type { ReactNode } from "react";

/** Shared, accessible form primitives used by the contact, interest and donation forms. */

interface BaseProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string | undefined;
  hint?: string | undefined;
  required?: boolean;
}

function Shell({
  id,
  label,
  error,
  hint,
  required,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  hint?: string | undefined;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </label>
      {hint ? <p className="mt-1 text-xs text-muted-foreground">{hint}</p> : null}
      <div className="mt-2">{children}</div>
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const inputClass =
  "min-h-11 w-full border border-border bg-card px-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none aria-[invalid=true]:border-destructive";

export function TextField({
  type = "text",
  placeholder,
  autoComplete,
  ...props
}: BaseProps & { type?: string; placeholder?: string; autoComplete?: string }) {
  return (
    <Shell {...props}>
      <input
        id={props.id}
        type={type}
        value={props.value}
        placeholder={placeholder ?? ""}
        autoComplete={autoComplete ?? "on"}
        onChange={(event) => props.onChange(event.target.value)}
        aria-invalid={Boolean(props.error)}
        aria-describedby={props.error ? `${props.id}-error` : undefined}
        className={inputClass}
      />
    </Shell>
  );
}

export function TextAreaField({ rows = 5, ...props }: BaseProps & { rows?: number }) {
  return (
    <Shell {...props}>
      <textarea
        id={props.id}
        rows={rows}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        aria-invalid={Boolean(props.error)}
        aria-describedby={props.error ? `${props.id}-error` : undefined}
        className="w-full border border-border bg-card p-3 text-sm text-foreground focus-visible:border-primary focus-visible:outline-none aria-[invalid=true]:border-destructive"
      />
    </Shell>
  );
}

export function SelectField({
  options,
  ...props
}: BaseProps & { options: { value: string; label: string }[] }) {
  return (
    <Shell {...props}>
      <select
        id={props.id}
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
        aria-invalid={Boolean(props.error)}
        aria-describedby={props.error ? `${props.id}-error` : undefined}
        className={inputClass}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Shell>
  );
}

export const isEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim());
export const isPhone = (value: string) => /^[0-9+\-\s()]{7,18}$/.test(value.trim());
