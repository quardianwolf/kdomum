import WithSession from "./WithSession";

export default function WithLayout({
  component: Component,
  layout: Layout,
  requireSession = false,
  layoutData,
  data,
  ...rest
}) {
  return (
    <Layout data={layoutData}>
      <WithSession requireSession={requireSession}>
        <Component {...rest} data={data} />
      </WithSession>
    </Layout>
  );
}
