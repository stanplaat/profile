import { renderToStream } from "@react-pdf/renderer";
// this is your PDF document component created with React PDF
import { PDFDocument } from "~/components/pdf";
import type { LoaderFunction } from "remix";

export let loader: LoaderFunction = async ({ request, params }) => {
  // you can get any data you need to generate the PDF inside the loader
  // however you want, e.g. fetch an API or query a DB or read the FS
  let data = await getDataForThePDFSomehow({ request, params });

  // render the PDF as a stream so you do it async
  let stream = await renderToStream(<PDFDocument {...data} />);

  // and transform it to a Buffer to send in the Response
  let body: Buffer = await new Promise((resolve, reject) => {
    let buffers: Uint8Array[] = [];
    stream.on("data", (data) => {
      buffers.push(data);
    });
    stream.on("end", () => {
      resolve(Buffer.concat(buffers));
    });
    stream.on("error", reject);
  });

  // finally create the Response with the correct Content-Type header for
  // a PDF
  let headers = new Headers({ "Content-Type": "application/pdf" });
  return new Response(body, { status: 200, headers });
}