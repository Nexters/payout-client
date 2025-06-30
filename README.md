# Payout Client

This is the frontend client for Payout, a web application designed to help users track and analyze stock dividends. It provides features for viewing dividend information, managing portfolios, and gaining insights into sector-specific dividend data.

## Tech Stack

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **UI Components:** [shadcn/ui](https://ui.shadcn.com/), [Headless UI](https://headlessui.com/), [Tremor](https://www.tremor.so/)
*   **State Management:** [TanStack Query](https://tanstack.com/query/latest)
*   **API Client Generation:** [Orval](https://orval.dev/)
*   **Linting:** [ESLint](https://eslint.org/)
*   **Formatting:** [Prettier](https://prettier.io/)

## Getting Started

### Prerequisites

*   Node.js (v20 or later)
*   pnpm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/payout-client.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd payout-client
    ```
3.  Install the dependencies:
    ```bash
    pnpm install
    ```

### Running the Development Server

To start the development server, run the following command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

*   `pnpm dev`: Starts the development server.
*   `pnpm build`: Creates a production build of the application.
*   `pnpm start`: Starts the production server.
*   `pnpm lint`: Lints the codebase using ESLint.
*   `pnpm generate:api`: Generates the API client from the OpenAPI specification using Orval.

## Project Structure

The project follows a standard Next.js App Router structure:

```
.
├── public/              # Static assets
├── src/
│   ├── api/             # API client generation
│   ├── app/             # Next.js App Router pages and layouts
│   ├── components/      # Shared UI components
│   ├── hooks/           # Custom React hooks
│   ├── state/           # State management (TanStack Query, Zustand)
│   └── utils/           # Utility functions
├── .env                 # Environment variables
├── next.config.js       # Next.js configuration
├── package.json         # Project dependencies and scripts
└── tsconfig.json        # TypeScript configuration
```

## API Generation

This project uses [Orval](https://orval.dev/) to generate a TypeScript client for the backend API. The configuration is defined in `orval.config.js`.

To regenerate the API client, run the following command:

```bash
pnpm generate:api
```

This will use the OpenAPI specification to create the necessary API client files in the `src/api/generated` directory.

## Deployment

The project is configured for deployment on [Vercel](https://vercel.com/), the platform from the creators of Next.js.