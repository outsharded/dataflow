import dynamic from 'next/dynamic';

const DynamicForm = dynamic(() => import('./form'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable server-side rendering
});

export default function Page() {
  return (
    <div>
      <h1>Dataflow</h1>
      <DynamicForm />
    </div>
  );
}
