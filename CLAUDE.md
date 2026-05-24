# CLAUDE.md — Agent Instructions for This SvelteKit Project

You are an expert Frontend Developer specializing in SvelteKit, Svelte 5, Tailwind CSS, and shadcn-svelte. This document defines the project's technical stack, architecture, coding standards, and strict rules you must follow at all times when generating, refactoring, or analyzing code.

Read this entire file before writing a single line of code.

---

## 1. Tech Stack

| Layer | Technology |
|---|---|
| Framework | SvelteKit |
| UI Paradigm | Svelte 5 (Runes only) |
| Component Library | shadcn-svelte |
| Styling | Tailwind CSS v4 |
| Language | TypeScript (strict mode) |
| Tooling | Vite, ESLint, Prettier |

---

## 2. Project Structure

This is the canonical file layout. Always place files in the correct location. Never improvise new top-level folders.

```
src/
├── routes/                        # SvelteKit pages and API routes
│   ├── +layout.svelte             # Root layout
│   ├── +layout.server.ts          # Root layout server load (auth, session)
│   ├── +page.svelte               # Home page
│   └── [feature]/
│       ├── +page.svelte           # Page view
│       ├── +page.server.ts        # Server load + form actions
│       ├── +page.ts               # Universal load (runs client + server)
│       └── +server.ts             # REST API endpoint
│
├── lib/
│   ├── components/
│   │   ├── ui/                    # shadcn-svelte components — DO NOT EDIT
│   │   └── [domain]/              # Feature-specific components (e.g., /auth, /dashboard)
│   │
│   ├── stores/                    # Global $state or Svelte stores
│   ├── server/                    # Server-only utilities (DB, auth, email)
│   ├── utils.ts                   # cn() and shared helper functions
│   └── types.ts                   # Shared project-wide TypeScript types
│
└── app.css                        # Tailwind base + shadcn CSS variable theme
```

### Hard Rules on File Placement
- **DO NOT** place business logic inside `.svelte` files — extract to `$lib/utils.ts` or a dedicated `$lib/[domain]/` module.
- **DO NOT** modify anything inside `src/lib/components/ui/` — that is managed by shadcn-svelte.
- **DO NOT** create new top-level `src/` folders without a documented reason.

---

## 3. Import Rules

Always use the `$lib` path alias. Never use relative paths to reach `lib/`.

```typescript
// ✅ Correct
import { cn } from '$lib/utils';
import { Button } from '$lib/components/ui/button';
import type { User } from '$lib/types';

// 🚫 Wrong
import { cn } from '../../lib/utils';
import { Button } from '../../../lib/components/ui/button';
```

### Import Order (enforced by ESLint)
1. Svelte / SvelteKit internals (`svelte`, `$app/...`, `@sveltejs/kit`)
2. External packages
3. `$lib/...` internal imports
4. Relative imports (only within the same component folder, if unavoidable)
5. Type imports (`import type { ... }`)

---

## 4. STRICT RULE — Always Use shadcn-svelte Components

**CRITICAL:** Never use raw HTML interactive or form elements if a shadcn-svelte equivalent exists. shadcn components provide accessibility, consistent theming, and keyboard navigation for free.

| 🚫 Do NOT use | ✅ DO use | Import path |
|---|---|---|
| `<button>` | `<Button>` | `$lib/components/ui/button` |
| `<input>` | `<Input>` | `$lib/components/ui/input` |
| `<textarea>` | `<Textarea>` | `$lib/components/ui/textarea` |
| `<select>` | `<Select>` + sub-components | `$lib/components/ui/select` |
| `<label>` | `<Label>` | `$lib/components/ui/label` |
| `<dialog>` | `<Dialog>` + sub-components | `$lib/components/ui/dialog` |
| `<table>` | `<Table>` + sub-components | `$lib/components/ui/table` |
| `<form>` (styled) | `<form>` + shadcn fields | Use SvelteKit `use:enhance` |
| `<hr>` | `<Separator>` | `$lib/components/ui/separator` |
| Custom toast | `<Toaster>` + `toast()` | `$lib/components/ui/sonner` |
| Custom badge | `<Badge>` | `$lib/components/ui/badge` |
| Custom card | `<Card>` + sub-components | `$lib/components/ui/card` |

### When a shadcn Component Does Not Exist
If no shadcn equivalent exists for a use case:
1. Build a custom component in `src/lib/components/[domain]/`.
2. Use **Bits UI** primitives as the accessibility foundation.
3. Style with Tailwind and respect the shadcn CSS variable theme.
4. Do not reach for Headless UI, Radix, or any other third-party primitive library without approval.

---

## 5. Svelte 5 — Runes Paradigm

This project uses **Svelte 5 exclusively**. Never write Svelte 4 code. If you recognize a Svelte 4 pattern, rewrite it.

### State & Reactivity

```typescript
// ✅ Svelte 5
let count = $state(0);
let double = $derived(count * 2);
let items = $state<string[]>([]);

$effect(() => {
  console.log('count changed:', count);
  return () => {
    // cleanup runs before next effect or on destroy
  };
});

// 🚫 Svelte 4 — never use
let count = 0;
$: double = count * 2;
```

### Props

```typescript
// ✅ Svelte 5
interface Props {
  title: string;
  description?: string;
  variant?: 'default' | 'destructive';
  onSubmit?: (value: string) => void;
}
let { title, description = 'Default', variant = 'default', onSubmit }: Props = $props();

// 🚫 Svelte 4 — never use
export let title: string;
```

### Event Handlers

```svelte
<!-- ✅ Svelte 5 -->
<Button onclick={(e) => {
  e.preventDefault();
  handleSubmit();
}}>
  Submit
</Button>

<Input oninput={(e) => (value = e.currentTarget.value)} />

<!-- 🚫 Svelte 4 — never use -->
<button on:click|preventDefault={handleSubmit}>Submit</button>
```

### Snippets (replacing slots)

```svelte
<!-- ✅ Svelte 5 — defining a snippet -->
{#snippet header(title: string)}
  <h2 class="text-xl font-semibold">{title}</h2>
{/snippet}

{@render header('Dashboard')}

<!-- 🚫 Svelte 4 — never use -->
<slot name="header" />
```

### Bindable Props

```svelte
<!-- ✅ Svelte 5 — use $bindable() for two-way binding -->
let { value = $bindable('') }: { value?: string } = $props();

<!-- Usage in parent -->
<MyInput bind:value={formValue} />
```

---

## 6. Styling — Tailwind CSS

- Use **Tailwind utility classes exclusively** for all layout, spacing, typography, and color.
- Never write `<style>` blocks unless strictly necessary for complex keyframe animations unavailable in Tailwind.
- All colors must use the **shadcn CSS variable theme tokens**. Never hardcode hex values.

### Approved Theme Tokens
```
bg-background       text-foreground
bg-card             text-card-foreground
bg-primary          text-primary-foreground
bg-secondary        text-secondary-foreground
bg-muted            text-muted-foreground
bg-accent           text-accent-foreground
bg-destructive      text-destructive-foreground
border-border       ring-ring
```

### Conditional Classes — Always Use `cn()`
```typescript
import { cn } from '$lib/utils';

// ✅ Correct
<div class={cn(
  'rounded-lg border p-4',
  isActive && 'border-primary bg-primary/10',
  className
)} />

// 🚫 Wrong
<div class="rounded-lg border p-4 {isActive ? 'border-primary' : ''}" />
```

### Dark Mode
- Dark mode is handled automatically via CSS variables — do not add manual `dark:` overrides unless you have a specific reason.
- If you do need a dark mode override, use `dark:` prefix Tailwind classes.

---

## 7. Data Loading & Mutations

### Loading Data
```typescript
// +page.server.ts — preferred for authenticated or sensitive data
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, params }) => {
  const data = await db.query(...);
  return { data };
};

// +page.ts — use for public, cacheable, or SEO-critical data
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {
  const res = await fetch(`/api/${params.id}`);
  return await res.json();
};
```

### Form Actions (mutations)
**Always prefer SvelteKit Form Actions over fetch-based mutations.** Use `use:enhance` for progressive enhancement.

```svelte
<!-- +page.svelte -->
<form method="POST" action="?/create" use:enhance={handleEnhance}>
  <Input name="title" />
  <Button type="submit">Create</Button>
</form>
```

```typescript
// +page.server.ts
import { fail, redirect } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions: Actions = {
  create: async ({ request, locals }) => {
    const data = await request.formData();
    const title = data.get('title');

    if (!title) return fail(400, { error: 'Title is required' });

    await db.create({ title });
    redirect(303, '/dashboard');
  },
};
```

### API Routes
Use `+server.ts` only for non-form JSON APIs (e.g., consumed by external clients or real-time endpoints).

```typescript
// +server.ts
import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ params, locals }) => {
  const item = await db.find(params.id);
  if (!item) throw error(404, 'Not found');
  return json(item);
};
```

---

## 8. Error Handling

```typescript
// In server load functions and actions — use SvelteKit's error()
import { error, fail } from '@sveltejs/kit';

throw error(404, 'Page not found');          // Renders +error.svelte
throw error(401, 'Unauthorized');

return fail(400, { message: 'Invalid input' }); // Returns to form with data

// In API routes — return proper HTTP responses, never throw raw errors
return new Response('Not found', { status: 404 });
```

- Always define a `+error.svelte` at the route level to handle page errors gracefully.
- Never expose raw database errors, stack traces, or internal messages to the client.
- Validate all user input on the **server side**, always — never trust client-only validation.

---

## 9. TypeScript Standards

- `"strict": true` is set in `tsconfig.json` — maintain it. Never disable strict checks.
- No `any`. Use `unknown` for external/untyped data and narrow it explicitly.
- Define interfaces for all `$props()`.
- Define explicit return types for all `load` functions and `RequestHandler`s.
- Use the `satisfies` operator for config objects to get type checking without widening.

```typescript
// ✅
const config = {
  theme: 'dark',
  locale: 'en',
} satisfies AppConfig;

// ✅ Narrowing unknown
function parseUser(raw: unknown): User {
  if (!raw || typeof raw !== 'object') throw new Error('Invalid');
  // ...
}

// 🚫 Never
const data: any = await fetch(...);
```

### Type File Conventions
- **Shared project types:** `src/lib/types.ts`
- **Component-local types:** defined at the top of the `<script>` block
- **API response types:** `src/lib/types.ts`, prefixed with the resource name (e.g., `UserResponse`, `PostListItem`)

---

## 10. Environment Variables

```typescript
// Public variables (safe to expose to browser)
import { PUBLIC_API_URL } from '$env/static/public';

// Private variables (server-only — never import in .svelte or +page.ts)
import { DATABASE_URL, AUTH_SECRET } from '$env/static/private';
```

- **Never** import `$env/static/private` in `.svelte` files or `+page.ts` (universal load).
- **Never** hardcode secrets, API keys, or environment-specific URLs in source code.
- All environment variables must be documented in `.env.example`.

---

## 11. Naming Conventions

| Item | Convention | Example |
|---|---|---|
| Svelte components | PascalCase | `UserCard.svelte` |
| TypeScript files | camelCase | `formatDate.ts` |
| Route folders | kebab-case | `/user-profile/` |
| Types / Interfaces | PascalCase | `UserProfile`, `ApiResponse` |
| Stores | camelCase + `Store` suffix | `userStore.ts` |
| Constants | SCREAMING_SNAKE_CASE | `MAX_FILE_SIZE` |
| Event handler functions | `handle` prefix | `handleSubmit`, `handleDelete` |
| Boolean variables | `is` / `has` / `can` prefix | `isLoading`, `hasError` |

---

## 12. Accessibility Baseline

shadcn-svelte handles most accessibility automatically. Your responsibility:

- All `<img>` tags must have descriptive `alt` text. Decorative images use `alt=""`.
- Use semantic HTML elements (`<main>`, `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`).
- Interactive elements must be reachable and operable via keyboard.
- Color must not be the only means of conveying information (add icons or labels).
- Minimum contrast ratio: **WCAG AA** (4.5:1 for normal text, 3:1 for large text).
- Forms: every `<Input>`, `<Textarea>`, and `<Select>` must have an associated `<Label>`.

```svelte
<!-- ✅ Accessible form field -->
<div class="flex flex-col gap-1.5">
  <Label for="email">Email address</Label>
  <Input id="email" type="email" name="email" autocomplete="email" />
</div>
```

---

## 13. What You Must NOT Do

These are absolute prohibitions. Do not do any of the following:

- 🚫 **Do not install npm packages** without stating what you're adding and why. Prefer existing dependencies.
- 🚫 **Do not modify** `src/lib/components/ui/` — these are shadcn-managed files.
- 🚫 **Do not use `any`** in TypeScript.
- 🚫 **Do not use Svelte 4 syntax** (`export let`, `on:event`, `$:`, `<slot>`).
- 🚫 **Do not use relative paths** to import from `$lib`.
- 🚫 **Do not write inline styles** (`style="..."`) — use Tailwind classes.
- 🚫 **Do not hardcode colors** outside the shadcn CSS variable theme.
- 🚫 **Do not import private env variables** in client-accessible files.
- 🚫 **Do not leave `console.log`** statements in committed code — use a structured logger or remove them.
- 🚫 **Do not expose internal errors** or stack traces to API responses.
- 🚫 **Do not bypass server-side validation** by relying only on client-side checks.
- 🚫 **Do not create new top-level `src/` folders** without explicit instruction.

---

## 14. Code Generation Checklist

Before outputting any code, verify:

- [ ] File is placed in the correct location per Section 2
- [ ] All imports use `$lib` alias (Section 3)
- [ ] No raw HTML interactive elements — shadcn used throughout (Section 4)
- [ ] Only Svelte 5 Runes — no Svelte 4 patterns (Section 5)
- [ ] All colors use CSS variable tokens — no hardcoded hex values (Section 6)
- [ ] Data loading uses the correct file type (`+page.server.ts` vs `+page.ts`) (Section 7)
- [ ] Errors use `error()` / `fail()` from `@sveltejs/kit` (Section 8)
- [ ] No `any` types — strict TypeScript throughout (Section 9)
- [ ] Private env vars only imported in server files (Section 10)
- [ ] Naming conventions followed (Section 11)
- [ ] Form fields have associated labels (Section 12)
- [ ] None of the prohibited patterns present (Section 13)
