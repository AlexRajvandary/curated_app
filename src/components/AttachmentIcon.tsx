import React from "react";

interface AttachmentIconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
}

const AttachmentIcon: React.FC<AttachmentIconProps> = ({
  size = 24,
  color = "currentColor",
  ...props
}) => {
  return (
    <svg
      fill={color}
      viewBox="0 0 32 32"
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>attachment</title>
      <path d="M23.061 13.441c0 0 1.172-0.891 0.281-1.782-0.893-0.891-1.76 0.259-1.76 0.259l-6.969 6.97c0 0-2.103 2.711-3.696 1.070s1.070-3.696 1.070-3.696l9.759-9.76c0 0 2.744-3.023 5.322-0.445 2.578 2.579-0.453 5.329-0.453 5.329l-13.213 13.214c0 0-4.228 4.884-8.143 0.969s1.016-8.095 1.016-8.095l10.034-10.034c0 0 1.125-0.938 0.281-1.782s-1.781 0.281-1.781 0.281l-11.51 11.511c0 0-4.345 4.767 0.508 9.618 4.853 4.853 9.619 0.509 9.619 0.509l15.822-15.823c0 0 3.164-3.493-0.609-7.268s-7.268-0.609-7.268-0.609l-11.61 11.611c0 0-3.49 2.834-0.325 5.998s5.951-0.372 5.951-0.372l7.674-7.673z" />
    </svg>
  );
};

export default AttachmentIcon;
