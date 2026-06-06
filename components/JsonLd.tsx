import { type JsonLdSchema } from "@/lib/jsonld";

/**
 * Renders one or more schema.org JSON-LD blocks as inline <script> tags.
 * Strips undefined values for cleaner output.
 */
export function JsonLd({ data }: { data: JsonLdSchema | JsonLdSchema[] }) {
  const schemas = Array.isArray(data) ? data : [data];
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
