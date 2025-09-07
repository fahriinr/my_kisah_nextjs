export default async function ProductsPage({
  params,
}: {
  params: Promise<{
    id: string;
  }>;
}) {
  const resultParams = await params;
  console.log(resultParams.id);
  return (
    <>
      <h1>Products Detail Page: {resultParams.id} tuh</h1>
    </>
  );
}
