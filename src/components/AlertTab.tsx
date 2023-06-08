import { Alert } from "flowbite-react";

export default function AlertTab(): JSX.Element {
  return (
    <Alert
      color="info"
      className={"absolute top-[700px] left-[350px] right-[1600px] text-lg"}
    >
      <span>
        <p>
          <span className="font-bold">Info alert! </span>
          Change a few things up and try submitting again.
        </p>
      </span>
    </Alert>
  );
}
