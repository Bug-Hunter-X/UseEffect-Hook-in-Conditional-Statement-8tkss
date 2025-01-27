```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [shouldLog, setShouldLog] = useState(true);

  useEffect(() => {
    if (shouldLog) {
      console.log('Component rendered');
    }
    return () => {
      // Cleanup function (optional)
    };
  }, [shouldLog]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setShouldLog(!shouldLog)}>Toggle Logging</button>
    </div>
  );
}
```