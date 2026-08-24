import { cn } from "@/lib/utils";
import { Certification } from "@/types/certificate";
import { ArrowUpRightIcon, Crown } from "lucide-react";
import { format } from "date-fns";
import { Separator } from "./ui/separator";
import { IconTile } from "./ui/icon-tile";
import { ClaudeIcon, CourseraIcon, MetaIcon, UdemyIcon } from "./icons/icons";
import React from "react";

interface CertificateItemProps {
  className?: string;
  certification: Certification;
}
const ISSUER_ICONS: Record<string, React.ReactNode> = {
  coursera: <CourseraIcon />,
  meta: <MetaIcon />,
  udemy: <UdemyIcon />,
  claude: <ClaudeIcon />,
};

function CertificateItem({ certification, className }: CertificateItemProps) {
  return (
    <a
      className={cn(
        "not-prose flex items-center gap-2 border-b py-4 hover:bg-muted-foreground/10 px-2",
        className,
      )}
      href={certification.credentialURL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${certification.title} certification issued by ${certification.issuer}`}
    >
      {certification.issuerLogoURL ? (
        <img
          src={certification.issuerLogoURL}
          alt={`${certification.issuer} logo`}
          className="mx-4 size-8 rounded-md object-contain"
        />
      ) : certification.issuerIconName ? (
        React.cloneElement(
          ISSUER_ICONS[certification.issuerIconName] as React.ReactElement<{
            className?: string;
          }>,
          {
            className: "mx-4 size-8",
          },
        )
      ) : (
        <IconTile className="mx-4 size-8 text-muted-foreground">
          <Crown />
        </IconTile>
      )}

      <div className="flex-1 flex items-center justify-between">
        <div>
          <h3 className="leading-snug text-balance text-lg">
            {certification.title}
          </h3>
          <dl className="flex flex-wrap items-center gap-x-2 text-sm text-muted-foreground">
            <div>
              <dt className="sr-only">Issued by</dt>
              <dd>
                <span aria-hidden>@</span>
                <span className="ml-0.5">{certification.issuer}</span>
              </dd>
            </div>

            <Separator
              className="data-vertical:h-4 data-vertical:self-center"
              orientation="vertical"
              aria-hidden
            />

            <div>
              <dt className="sr-only">Issued on</dt>
              <dd>
                <time
                  dateTime={new Date(certification.issueDate).toISOString()}
                >
                  {format(new Date(certification.issueDate), "dd.MM.yyyy")}
                </time>
              </dd>
            </div>
          </dl>
        </div>

        {certification.credentialURL && (
          <ArrowUpRightIcon
            className="size-4.5 text-muted-foreground"
            aria-hidden="true"
          />
        )}
      </div>
    </a>
  );
}

export default CertificateItem;
