import { getSummaryById } from "@/data/loaders";
import { SummaryCardForm } from "@/components/forms/summary-card-form";

// interface ParamsProps {
//   params: {
//     videoId: string;
//   };
// }

export type paramsType = Promise<{ videoId: string }>;

export default async function SummaryCardRoute(props: { params: paramsType }) {
  //const params = await props?.params;
  const { videoId } = await props?.params;
  const data = await getSummaryById(videoId);
  return <SummaryCardForm item={data.data} />;
}
