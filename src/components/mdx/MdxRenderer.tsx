import React from "react";
import * as runtime from "react/jsx-runtime";
import { Tip, Warning, ProsCons, AffiliateBox } from "./MdxCallouts";

const sharedComponents = {
  Tip,
  Warning,
  ProsCons,
  AffiliateBox,
};

// Evaluate the Velite compiled MDX code string
function getMdxComponent(code: string) {
  const fn = new Function(code);
  return fn({ ...runtime }).default;
}

interface MdxRendererProps {
  code: string;
  components?: Record<string, React.ComponentType<any>>;
}

export function MdxRenderer({ code, components }: MdxRendererProps) {
  const Component = React.useMemo(() => getMdxComponent(code), [code]);

  return (
    <div className="prose-night-bento max-w-none">
      <Component components={{ ...sharedComponents, ...components }} />
    </div>
  );
}
