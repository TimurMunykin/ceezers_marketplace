## Getting Started

First, run the development server:

```bash
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses
- [Next.js](https://nextjs.org/) as the React framework
- [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font
- [`Tanstack Query`](https://tanstack.com/query/latest) to is used to manage asynchronous data fetching, caching, and state management, simplifying server state sync in React applications
- [`Heroicons`](https://www.npmjs.com/package/@heroicons/react) is employed to provide a consistent set of SVG icons throughout the user interface, enhancing visual elements and interaction cues

## Note on Unit Testing
The project currently lacks unit testing due to unresolved compatibility issues between the latest version of Next.js and several testing libraries, including Vitest and Jest. Initial attempts to introduce unit testing were met with numerous challenges, notably synchronization issues with the testing frameworks as outlined in [this issue](https://github.com/testing-library/jest-dom/issues/546). Despite substantial efforts to resolve these conflicts, including dedicating hours to particular incidents, a viable solution has not been reached.

## Planned Areas of Improvement

### Project Structure Refinement
- Reorganize the project's file and component structure following Next.js best practices for improved maintainability.

### Integration and Unit Testing
- Establish a solid foundation of unit tests, resolving compatibility issues with the latest version of Next.js and test libraries.

### Sustainable Development Goals (SDGs) Display
- Implement a feature to visually represent SDGs associated with each project within the platform.

### Performance and Code Quality Review
- Perform a code audit to identify and rectify performance issues, and enforce code quality standards.

### Enhanced Lazy Loading
- Utilize `React.Suspense` for a smoother UX during component and data fetching operations.

### Market Functionality Bug Fixes
- Rectify existing bugs, particularly the project list not updating post cart additions.

### Localization Support
- Introduce localization as a global environmental parameter to support a multilingual user base.

### CI/CD and Containerization
- Optimize CI/CD workflows with Docker and GitLab runners for efficient development and deployment cycles.

### Accessibility Features
- Incorporate accessibility support, including voiceover compatibility, to adhere to accessibility guidelines.

### SEO Enhancement
- Apply SEO strategies to improve visibility and search rankings.

### Scalable Filters Design
- Develop a base filter component that can be extended to create a scalable filtering system.

### State Management Evaluation
- Evaluate and possibly integrate a state management solution like FLUX/REDUX for complex application state handling.

### Error Monitoring Integration
- Integrate error monitoring tools such as Sentry for real-time error tracking and diagnostics.

### Semantic Search/Filter with LLM Usage
- Explore leveraging Large Language Models (LLMs) for a semantic search and filter experience.
