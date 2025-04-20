export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    description: string;
    publishedDate: string;
    updatedDate?: string;
    author: {
        name: string;
        title: string;
        bio: string;
    };
    content: string;
    excerpt: string;
    coverImage?: string;
    readingTime: number; // in minutes
    categories: string[];
    tags: string[];
    isFeatured: boolean;
}

// Sample blog posts data
export const blogPosts: BlogPost[] = [
    {
        id: '1',
        slug: 'optimizing-react-performance',
        title: 'Optimizing React Performance: Strategies That Actually Work',
        description: 'Learn practical techniques to improve your React application\'s performance and deliver a better user experience.',
        publishedDate: '2024-04-01',
        author: {
            name: 'John Webster',
            title: 'Senior Software Engineer',
            bio: 'Full-stack developer specializing in React, Next.js, and performance optimization.'
        },
        content: `
# Optimizing React Performance: Strategies That Actually Work

When building React applications that scale, performance optimization becomes critical to delivering a good user experience. In this article, I'll share proven strategies based on my experience optimizing applications for clients across different industries.

## Why Performance Matters

Before diving into optimization techniques, let's understand why performance is crucial:

- **User Experience**: Studies show that 53% of mobile site visits are abandoned if a page takes longer than 3 seconds to load.
- **Conversion Rates**: A 100ms improvement in site speed can increase conversion rates by 1%.
- **SEO Rankings**: Google uses site speed as a ranking factor for both desktop and mobile searches.

## Common Performance Issues in React

There are several areas where React applications typically suffer performance issues:

1. **Excessive Re-renders**
2. **Large Bundle Sizes**
3. **Unoptimized Images**
4. **Inefficient State Management**
5. **Poor Data Fetching Strategies**

Let's address each of these issues with practical solutions.

## 1. Preventing Unnecessary Re-renders

React's virtual DOM is powerful, but unnecessary re-renders can still impact performance.

### Use React.memo for Component Memoization

\`React.memo\` is a higher-order component that memoizes your component, preventing re-renders if props haven't changed:

\`\`\`jsx
const UserProfile = React.memo(({ user }) => {
  // Component logic here
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
    </div>
  );
});
\`\`\`

### Implement shouldComponentUpdate or React.PureComponent

For class components, use \`shouldComponentUpdate\` or extend \`React.PureComponent\` to control re-rendering:

\`\`\`jsx
class UserList extends React.PureComponent {
  render() {
    return (
      <ul>
        {this.props.users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}
\`\`\`

### Use the useCallback and useMemo Hooks

These hooks help prevent unnecessary re-renders in functional components:

\`\`\`jsx
const MemoizedComponent = () => {
  // Only re-calculated when dependencies change
  const expensiveCalculation = useMemo(() => {
    return calculateSomethingExpensive(a, b);
  }, [a, b]);

  // Only recreated when dependencies change
  const handleClick = useCallback(() => {
    console.log('Button clicked');
  }, []);

  return <button onClick={handleClick}>Click me</button>;
};
\`\`\`

## 2. Optimizing Bundle Size

Large JavaScript bundles can significantly delay the initial loading of your application.

### Code Splitting with Dynamic Imports

Split your code into smaller chunks that can be loaded on demand:

\`\`\`jsx
import React, { lazy, Suspense } from 'react';

// Lazy load component
const ExpensiveComponent = lazy(() => import('./ExpensiveComponent'));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ExpensiveComponent />
      </Suspense>
    </div>
  );
}
\`\`\`

### Tree Shaking and Dead Code Elimination

Use tools like Webpack and ESLint to identify and remove unused code:

\`\`\`javascript
// Use ES modules for better tree shaking
import { Button } from 'ui-library'; // Only imports Button component
\`\`\`

### Analyze Your Bundle

Use tools like \`webpack-bundle-analyzer\` to visualize your bundle size and identify large dependencies.

## 3. Image Optimization

Images often account for the largest portion of a page's weight.

### Next.js Image Component

If you're using Next.js, use the built-in Image component for automatic optimization:

\`\`\`jsx
import Image from 'next/image';

function Avatar() {
  return (
    <Image
      src="/profile.jpg"
      alt="Profile picture"
      width={500}
      height={500}
      placeholder="blur"
      blurDataURL="data:image..."
    />
  );
}
\`\`\`

### Lazy Loading Images

For other React applications, implement lazy loading:

\`\`\`jsx
import { useEffect, useRef, useState } from 'react';

function LazyImage({ src, alt }) {
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    });

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div ref={imgRef}>
      {isVisible ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="placeholder" />
      )}
    </div>
  );
}
\`\`\`

## 4. Efficient State Management

Poor state management can lead to excessive re-renders and complex data flow.

### Use Context API Wisely

The Context API is powerful but can cause re-renders of all consumers when the context value changes:

\`\`\`jsx
// Split your contexts by purpose
const ThemeContext = React.createContext();
const UserContext = React.createContext();

// Provide more granular contexts
function App() {
  return (
    <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={user}>
        <MainContent />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}
\`\`\`

### Consider State Management Libraries

For complex applications, consider libraries like Redux, Zustand, or Jotai that provide more efficient state updates.

## 5. Optimizing Data Fetching

Inefficient data fetching can block rendering and create poor user experiences.

### Implement Data Fetching Patterns

Use SWR or React Query for efficient data fetching with caching:

\`\`\`jsx
import useSWR from 'swr';

function Profile() {
  const { data, error } = useSWR('/api/user', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <div>Hello {data.name}!</div>;
}
\`\`\`

### Implement Pagination and Infinite Scrolling

Fetch only the data that's needed, when it's needed:

\`\`\`jsx
function ProductList() {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useSWR(\`/api/products?page=\${page}\`, fetcher);

  return (
    <div>
      {data.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
      <button
        onClick={() => setPage(page + 1)}
        disabled={isLoading}
      >
        Load More
      </button>
    </div>
  );
}
\`\`\`

## Real-world Case Study

One of my recent clients, an e-commerce platform, was struggling with performance issues. Their product pages were taking over 5 seconds to load, and they had a high bounce rate.

By implementing the following optimizations:

1. Code splitting the product page
2. Implementing lazy loading for images
3. Optimizing the state management architecture
4. Adding a caching layer for API responses

We reduced the load time to under 1.5 seconds, which resulted in:

- 32% decrease in bounce rate
- 24% increase in pages per session
- 18% increase in conversion rate

## Measuring Performance

Always measure before and after optimization. Use tools like:

- Lighthouse for overall performance scoring
- React DevTools Profiler for component rendering performance
- Chrome Performance tab for runtime performance

## Conclusion

Performance optimization in React is an ongoing process. Start by measuring to identify bottlenecks, implement the appropriate optimizations, and measure again to validate your improvements.

Remember that premature optimization can lead to unnecessary complexity. Focus on the areas that provide the most significant impact for your specific application and user experience.

By following these strategies, you'll be able to build React applications that not only have great features but deliver them with the performance users expect.

Would you like to learn more about specific optimization techniques? Let me know in the comments below or [contact me](/contact) to discuss how I can help optimize your React application.
`,
        excerpt: 'Learn practical techniques to improve your React application\'s performance, from preventing unnecessary re-renders to optimizing bundle size and implementing efficient data fetching patterns.',
        readingTime: 8,
        categories: ['Frontend Development', 'Performance'],
        tags: ['React', 'JavaScript', 'Performance Optimization', 'Web Development'],
        isFeatured: true
    },
    {
        id: '2',
        slug: 'building-accessible-web-applications',
        title: 'Building Truly Accessible Web Applications',
        description: 'A comprehensive guide to creating web applications that work for everyone, including users with disabilities.',
        publishedDate: '2024-03-15',
        author: {
            name: 'John Webster',
            title: 'Senior Software Engineer',
            bio: 'Advocate for accessible web experiences with expertise in WCAG compliance.'
        },
        content: `
# Building Truly Accessible Web Applications

Web accessibility isn't just a legal requirement or a checkbox to tick—it's about creating applications that everyone can use, regardless of their abilities or disabilities. In this guide, I'll share practical approaches to building truly accessible web applications.

## Why Accessibility Matters

Accessibility (often abbreviated as a11y) is about designing and developing web applications that people with disabilities can perceive, understand, navigate, and interact with. Consider these facts:

- Over 1 billion people worldwide have some form of disability
- In the US alone, around 61 million adults live with a disability
- The global market of people with disabilities represents $13 trillion in annual disposable income

Beyond the ethical and legal considerations, accessible applications benefit everyone, including:

- Users with temporary disabilities (e.g., broken arm)
- Users with situational limitations (e.g., bright sunlight, loud environment)
- Aging users experiencing declining abilities
- Users with slow internet connections or older devices

## Key Areas of Web Accessibility

### 1. Semantic HTML

One of the foundations of accessibility is using proper semantic HTML elements.

\`\`\`html
<!-- Poor accessibility -->
<div class="button" onclick="submitForm()">Submit</div>

<!-- Good accessibility -->
<button type="submit">Submit</button>
\`\`\`

Semantic HTML provides meaning to content, which is crucial for assistive technologies like screen readers. Always favor semantic elements over generic \`div\` or \`span\` elements:

- Use \`<nav>\`, \`<main>\`, \`<section>\`, \`<article>\`, \`<header>\`, \`<footer>\` for layout
- Use \`<button>\` for interactive elements that trigger actions
- Use \`<a>\` for navigation to different pages or resources
- Use heading elements (\`<h1>\` to \`<h6>\`) in a hierarchical order

### 2. Keyboard Navigation

Many users with motor disabilities rely entirely on keyboard navigation. Ensure that:

- All interactive elements are focusable and operable with a keyboard
- A visible focus indicator exists for all interactive elements
- Focus order is logical and follows the visual layout
- No keyboard traps exist where users can't exit a component

\`\`\`jsx
// Poor keyboard accessibility
<div 
  className="card" 
  onClick={handleClick} 
>
  Click me
</div>

// Good keyboard accessibility
<div 
  className="card" 
  onClick={handleClick} 
  onKeyDown={(e) => e.key === 'Enter' && handleClick()} 
  tabIndex={0}
  role="button"
>
  Click me
</div>

// Best - using proper semantic elements
<button 
  className="card" 
  onClick={handleClick}
>
  Click me
</button>
\`\`\`

### 3. ARIA Attributes

ARIA (Accessible Rich Internet Applications) attributes can enhance HTML semantics when needed:

\`\`\`jsx
// Adding ARIA to a custom dropdown
<div role="combobox" aria-expanded={isOpen} aria-haspopup="listbox">
  <button 
    aria-label="Select an option" 
    onClick={toggleDropdown}
  >
    {selectedOption || 'Select...'}
  </button>
  {isOpen && (
    <ul role="listbox">
      {options.map(option => (
        <li 
          key={option.id} 
          role="option" 
          aria-selected={selectedOption === option.value}
          onClick={() => selectOption(option.value)}
        >
          {option.label}
        </li>
      ))}
    </ul>
  )}
</div>
\`\`\`

But remember: the first rule of ARIA is to not use ARIA if native HTML can do the job!

### 4. Color and Contrast

Color should never be the only way to convey information:

- Ensure sufficient contrast between text and its background (WCAG requires at least 4.5:1 for normal text)
- Don't rely solely on color to indicate state or convey meaning
- Consider how your UI looks to colorblind users

\`\`\`jsx
// Poor accessibility - relies only on color
<div className={isError ? 'text-red-500' : 'text-green-500'}>
  {message}
</div>

// Better accessibility - uses both color and an icon
<div className={isError ? 'text-red-500' : 'text-green-500'}>
  {isError ? (
    <span role="img" aria-label="Error">❌</span>
  ) : (
    <span role="img" aria-label="Success">✅</span>
  )}
  {message}
</div>
\`\`\`

### 5. Forms and Error Handling

Forms are a common source of accessibility issues:

- Always associate labels with form controls
- Provide clear instructions and error messages
- Group related form controls with \`<fieldset>\` and \`<legend>\`
- Ensure error messages are announced to screen readers

\`\`\`jsx
// Poor accessibility
<div>
  Email:
  <input type="email" onChange={handleChange} />
  {errors.email && <div className="text-red-500">{errors.email}</div>}
</div>

// Good accessibility
<div>
  <label htmlFor="email">Email</label>
  <input 
    id="email"
    type="email" 
    onChange={handleChange}
    aria-invalid={!!errors.email}
    aria-describedby={errors.email ? "email-error" : undefined}
  />
  {errors.email && (
    <div id="email-error" className="text-red-500" role="alert">
      {errors.email}
    </div>
  )}
</div>
\`\`\`

### 6. Dynamic Content and Announcements

When content changes dynamically, it should be announced to screen reader users:

\`\`\`jsx
function AnnouncementExample() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  
  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchData();
      setResults(data);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={loadData}>Load Data</button>
      {isLoading && <div aria-live="polite">Loading results...</div>}
      {!isLoading && results.length > 0 && (
        <div aria-live="polite">
          {results.length} results found
        </div>
      )}
      <ul>
        {results.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
\`\`\`

### 7. Responsive Design and Zoom

Accessible websites should work well at different zoom levels and viewport sizes:

- Ensure text can be resized up to 200% without loss of content or functionality
- Use relative units (em, rem) rather than fixed units (px)
- Test your application at various zoom levels (up to 400%)
- Design with mobile and touch interfaces in mind

## Testing for Accessibility

Accessibility testing should combine automated and manual approaches:

### Automated Testing

- Use tools like Lighthouse, Axe, or WAVE to identify basic issues
- Integrate accessibility linting in your CI/CD pipeline
- Use Jest with jest-axe for component-level testing

\`\`\`jsx
// Example of accessibility testing with jest-axe
import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Button from './Button';

expect.extend(toHaveNoViolations);

test('Button component has no accessibility violations', async () => {
  const { container } = render(<Button>Click Me</Button>);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
\`\`\`

### Manual Testing

No automated tool can replace manual testing:

- Test with a keyboard only (no mouse)
- Test with screen readers (NVDA, JAWS, VoiceOver)
- Test with high contrast mode and different zoom levels
- Include people with disabilities in your testing process when possible

## Real-world Case Study

For a healthcare client, I worked on a patient portal that needed to be accessible to users of all abilities. Here's what we implemented:

1. A comprehensive component library with built-in accessibility
2. Keyboard navigation testing for every feature
3. ARIA attributes for custom interactive components
4. Screen reader announcements for real-time updates
5. Regular accessibility audits with both automated tools and manual testing

The result was a WCAG 2.1 AA compliant application that provided a seamless experience for all users, including those with visual, motor, or cognitive disabilities.

## Conclusion

Building accessible web applications is not just a technical challenge—it's about empathy and inclusion. By incorporating accessibility from the beginning of your development process, you create better experiences for everyone.

Remember that accessibility is not a checklist but a mindset. It should be part of your development culture, not an afterthought or a feature to be implemented just before launch.

Need help making your web applications more accessible? [Contact me](/contact) for a consultation on how we can improve your application's accessibility together.
`,
        excerpt: 'Learn how to create web applications that work for everyone, including users with disabilities. This comprehensive guide covers semantic HTML, keyboard navigation, ARIA attributes, and more.',
        readingTime: 10,
        categories: ['Accessibility', 'Web Development'],
        tags: ['Accessibility', 'WCAG', 'Frontend', 'Inclusive Design'],
        isFeatured: true
    },
    {
        id: '3',
        slug: 'scaling-nodejs-applications',
        title: 'Scaling Node.js Applications for Enterprise Use',
        description: 'Discover strategies and best practices for scaling Node.js applications to handle enterprise-level traffic and complexity.',
        publishedDate: '2024-02-20',
        author: {
            name: 'John Webster',
            title: 'Senior Software Engineer',
            bio: 'Full-stack developer with extensive experience in building scalable backend systems.'
        },
        content: `
# Scaling Node.js Applications for Enterprise Use

Node.js has evolved from being a curiosity to a mainstream technology for building enterprise applications. Its event-driven, non-blocking I/O model makes it particularly well-suited for high-throughput, data-intensive applications. However, scaling Node.js applications for enterprise use requires careful planning and implementation.

In this article, I'll share strategies and best practices I've used to scale Node.js applications for large-scale production environments.

## Understanding Node.js Scalability Challenges

Before diving into solutions, it's important to understand the specific scalability challenges of Node.js:

1. **Single-threaded nature**: Despite being single-threaded, Node.js uses an event loop to handle concurrency, which can be both a strength and a limitation.

2. **CPU-intensive operations**: The event loop can be blocked by CPU-intensive tasks, affecting all requests being handled by that Node.js instance.

3. **Memory limitations**: Each Node.js process has a default memory limit (around 1.4GB on 64-bit systems), which can be a constraint for large applications.

4. **State management**: Maintaining state across multiple Node.js instances can be complex.

## Scaling Strategies

### 1. Horizontal Scaling with Clustering

Node.js's built-in \`cluster\` module allows you to create child processes that share server ports:

\`\`\`javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log('Master ' + process.pid + ' is running');

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log('Worker ' + worker.process.pid + ' died');
    // Replace the dead worker
    cluster.fork();
  });
} else {
  // Workers can share any TCP connection
  http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World\\n');
  }).listen(8000);

  console.log('Worker ' + process.pid + ' started');
}
\`\`\`

This approach allows your application to utilize multiple CPU cores, effectively scaling vertically on a single machine.

### 2. Load Balancing

For truly horizontal scaling across multiple machines, implement load balancing:

- **Nginx or HAProxy**: Configure these as reverse proxies to distribute traffic.
- **Cloud load balancers**: AWS ELB, Google Cloud Load Balancing, etc.
- **Container orchestration**: Kubernetes with service discovery.

Example Nginx load balancing configuration:

\`\`\`nginx
upstream nodejs_app {
    server app1.example.com:3000;
    server app2.example.com:3000;
    server app3.example.com:3000;
}

server {
    listen 80;
    server_name example.com;

    location / {
        proxy_pass http://nodejs_app;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
\`\`\`

### 3. Microservices Architecture

Breaking down a monolithic application into microservices allows for:

- Independent scaling of different components
- Technology diversity (using Node.js only where it makes sense)
- Improved fault isolation
- Team autonomy

\`\`\`
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   API       │     │   User      │     │  Product    │
│  Gateway    │────▶│  Service    │────▶│  Service    │
└─────────────┘     └─────────────┘     └─────────────┘
       │                                        │
       │            ┌─────────────┐             │
       └───────────▶│   Order     │◀────────────┘
                    │  Service    │
                    └─────────────┘
\`\`\`

Consider using a message broker like RabbitMQ or Kafka for communication between services:

\`\`\`javascript
// Producer (Order Service)
const amqp = require('amqplib');

async function sendOrderCreatedEvent(order) {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'order_events';
  
  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify({
    event: 'ORDER_CREATED',
    data: order
  })));
  
  console.log('Order created event sent: ' + order.id);
  
  setTimeout(() => {
    connection.close();
  }, 500);
}
\`\`\`

\`\`\`javascript
// Consumer (Inventory Service)
const amqp = require('amqplib');

async function startConsumer() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();
  const queue = 'order_events';
  
  await channel.assertQueue(queue, { durable: true });
  
  console.log('Waiting for messages in ' + queue);
  
  channel.consume(queue, (msg) => {
    const content = JSON.parse(msg.content.toString());
    
    if (content.event === 'ORDER_CREATED') {
      console.log('Processing order: ' + content.data.id);
      // Update inventory
      updateInventory(content.data.items);
      
      channel.ack(msg);
    }
  });
}

startConsumer().catch(console.error);
\`\`\`

### 4. Stateless Architecture

Make your Node.js applications stateless to allow for easier scaling:

- Move session data to Redis or another external store
- Use JWT tokens for authentication instead of session cookies
- Store file uploads in object storage (S3, Google Cloud Storage)

\`\`\`javascript
// Using Redis for session storage
const express = require('express');
const session = require('express-session');
const RedisStore = require('connect-redis').default;
const { createClient } = require('redis');

const app = express();
const redisClient = createClient({
  url: process.env.REDIS_URL
});

redisClient.connect().catch(console.error);

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 86400000 // 1 day
  }
}));
\`\`\`

### 5. Database Scaling

Database bottlenecks are often the true limiting factor in application scalability:

- **Read replicas**: Offload read operations to replicas.
- **Sharding**: Distribute data across multiple database instances.
- **Connection pooling**: Optimize database connections.
- **Caching**: Reduce database load with Redis or Memcached.

\`\`\`javascript
// Implementing a connection pool with pg
const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  min: 2,  // minimum pool size
  max: 10, // maximum pool size
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
});

async function queryDatabase(text, params) {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result.rows;
  } finally {
    client.release();
  }
}
\`\`\`

### 6. Caching Strategies

Implement multiple layers of caching:

- **Application-level caching**: Cache expensive operations in memory or Redis.
- **Response caching**: Cache API responses.
- **CDN**: Use a CDN for static assets and potentially API responses.

\`\`\`javascript
// Simple in-memory cache with expiration
class Cache {
  constructor(ttlSeconds = 60) {
    this.cache = new Map();
    this.ttl = ttlSeconds * 1000;
  }

  get(key) {
    const item = this.cache.get(key);
    if (!item) return null;
    
    // Check if the item has expired
    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }
    
    return item.value;
  }

  set(key, value) {
    const expiry = Date.now() + this.ttl;
    this.cache.set(key, { value, expiry });
  }
}

// Usage
const cache = new Cache(300); // 5 minutes TTL

async function getCachedData(key, fetchFunction) {
  // Try to get from cache first
  const cachedData = cache.get(key);
  if (cachedData) return cachedData;
  
  // If not in cache, fetch the data
  const data = await fetchFunction();
  
  // Store in cache for future requests
  cache.set(key, data);
  
  return data;
}
\`\`\`

### 7. Asynchronous Processing

Move CPU-intensive tasks to background workers:

\`\`\`javascript
// Using Bull queue for background processing
const Queue = require('bull');

// Create a queue
const videoProcessingQueue = new Queue('video-processing', {
  redis: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT
  }
});

// Add jobs to the queue
app.post('/videos', upload.single('video'), async (req, res) => {
  try {
    const videoId = generateId();
    
    // Add job to the queue
    await videoProcessingQueue.add({
      videoId,
      path: req.file.path,
      format: req.body.format
    });
    
    res.status(202).json({
      id: videoId,
      message: 'Video processing started'
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Process jobs in a separate worker
videoProcessingQueue.process(async (job) => {
  const { videoId, path, format } = job.data;
  
  // CPU-intensive task
  await processVideo(path, format);
  
  return { videoId, status: 'completed' };
});
\`\`\`

## Monitoring and Performance Tuning

Scaling is an iterative process that requires good monitoring:

### 1. Performance Metrics

Monitor key performance indicators:

- Response time
- Throughput (requests per second)
- Error rate
- CPU and memory usage
- Event loop lag

### 2. Tooling

Implement appropriate monitoring tools:

- **Application Performance Monitoring (APM)**: New Relic, Datadog, or Dynatrace
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana) or Graylog
- **Metrics**: Prometheus with Grafana
- **Tracing**: Jaeger or Zipkin

\`\`\`javascript
// Adding basic monitoring with Prometheus client
const express = require('express');
const promClient = require('prom-client');

const app = express();
const collectDefaultMetrics = promClient.collectDefaultMetrics;
const Registry = promClient.Registry;
const register = new Registry();

// Collect default metrics
collectDefaultMetrics({ register });

// Custom HTTP request counter
const httpRequestsTotal = new promClient.Counter({
  name: 'http_requests_total',
  help: 'Total number of HTTP requests',
  labelNames: ['method', 'route', 'status'],
  registers: [register]
});

// Middleware to track requests
app.use((req, res, next) => {
  const start = Date.now();
  
  // Record the end of the request
  res.on('finish', () => {
    const duration = Date.now() - start;
    httpRequestsTotal.inc({
      method: req.method,
      route: req.route?.path || req.path,
      status: res.statusCode
    });
    
    // Log request details
    console.log({
      method: req.method,
      url: req.url,
      status: res.statusCode,
      duration
    });
  });
  
  next();
});

// Expose metrics endpoint for Prometheus
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', register.contentType);
  res.end(await register.metrics());
});
\`\`\`

### 3. Memory Management

Monitor and optimize memory usage:

- Use \`--max-old-space-size\` flag to increase heap size when necessary
- Implement proper garbage collection practices
- Watch for memory leaks using tools like \`clinic.js\`

### 4. Performance Testing

Regular performance testing helps identify bottlenecks before they affect production:

- Load testing with tools like k6, Artillery, or JMeter
- Stress testing to find breaking points
- Endurance testing to identify memory leaks

\`\`\`javascript
// Example k6 load test script
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 20 },   // Ramp up to 20 users
    { duration: '1m', target: 20 },    // Stay at 20 users for 1 minute
    { duration: '30s', target: 0 },    // Ramp down to 0 users
  ],
  thresholds: {
    http_req_duration: ['p(95)<500'], // 95% of requests must complete below 500ms
  },
};

export default function() {
  const res = http.get('https://api.example.com/users');
  
  check(res, {
    'is status 200': (r) => r.status === 200,
    'response time < 200ms': (r) => r.timings.duration < 200,
  });
  
  sleep(1);
}
\`\`\`

## Real-world Case Study

For a fintech client handling over 100,000 transactions per hour, I implemented the following scaling strategy:

1. **Microservices Architecture**: Broke down the monolithic application into domain-specific services (user, account, transaction, notification)

2. **Horizontal Scaling**: Deployed services in Kubernetes with autoscaling based on CPU and memory usage

3. **Database Optimization**:
   - Implemented read replicas for read-heavy operations
   - Used database sharding for transaction data
   - Added Redis for caching frequently accessed data

4. **Asynchronous Processing**:
   - Used Kafka for event-driven communication between services
   - Implemented Bull queues for background processing

5. **Monitoring and Alerting**:
   - Set up Datadog for APM
   - Implemented ELK Stack for centralized logging
   - Created custom dashboards for business-critical metrics

The results were significant:

- Reduced average response time from 300ms to 85ms
- Increased throughput capacity by 400%
- Improved system stability with 99.99% uptime
- Reduced infrastructure costs by 25% through more efficient resource utilization

## Conclusion

Scaling Node.js applications for enterprise use requires a combination of architectural patterns, infrastructure considerations, and operational practices. The key is to identify potential bottlenecks early and implement the right scaling strategies for your specific use case.

Remember that scaling is not just about handling more load—it's also about maintaining performance, reliability, and developer productivity as your application grows.

Need help scaling your Node.js application? [Contact me](/contact) to discuss how we can design and implement a scaling strategy tailored to your specific requirements.
`,
        excerpt: 'Learn how to scale Node.js applications for enterprise-level performance, including clustering, microservices architecture, database optimization, and proper monitoring techniques.',
        readingTime: 12,
        categories: ['Backend Development', 'Architecture'],
        tags: ['Node.js', 'Scaling', 'Performance', 'Microservices', 'Enterprise'],
        isFeatured: true
    }
];

// Helper functions to work with blog posts

export function getAllPosts(): BlogPost[] {
    return [...blogPosts];
}

export function getFeaturedPosts(): BlogPost[] {
    return blogPosts.filter(post => post.isFeatured);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
    return blogPosts.filter(post =>
        post.categories.some(cat =>
            cat.toLowerCase() === category.toLowerCase()
        )
    );
}

export function getPostsByTag(tag: string): BlogPost[] {
    return blogPosts.filter(post =>
        post.tags.some(t =>
            t.toLowerCase() === tag.toLowerCase()
        )
    );
}

export function getAllCategories(): string[] {
    const categories = new Set<string>();

    blogPosts.forEach(post => {
        post.categories.forEach(category => {
            categories.add(category);
        });
    });

    return Array.from(categories);
}

export function getAllTags(): string[] {
    const tags = new Set<string>();

    blogPosts.forEach(post => {
        post.tags.forEach(tag => {
            tags.add(tag);
        });
    });

    return Array.from(tags);
}

export function searchPosts(query: string): BlogPost[] {
    const lowercaseQuery = query.toLowerCase();

    return blogPosts.filter(post =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.description.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.categories.some(category => category.toLowerCase().includes(lowercaseQuery)) ||
        post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    );
}
