import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
  Link,
} from "@nextui-org/react";

export default function CardDetils({
  imgTitle,
  imgUrl,
  description,
  websiteLink,
}: Readonly<{
  imgTitle: string;
  imgUrl: string;
  description: string;
  websiteLink: string;
}>) {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt={imgTitle}
          height={60}
          radius="sm"
          src={imgUrl}
          width={60}
          className="dark:invert-0 invert"
        />
        <div className="flex flex-col">
          <p className="text-lg ">{imgTitle}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{description}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Link isExternal showAnchorIcon href={websiteLink}>
          Visit {imgTitle} Website
        </Link>
      </CardFooter>
    </Card>
  );
}
