import { Dock, DockIcon } from "@/components/ui/dock";
import { Facebook } from "@/icons";

export default function SocialsLinks() {
  return (
    <div className="relative">
      <Dock direction="middle">
        <DockIcon>
          <Facebook />
        </DockIcon>
        <DockIcon>
          <Facebook />
        </DockIcon>
        <DockIcon>
          <Facebook />
        </DockIcon>
        <DockIcon>
          <Facebook />
        </DockIcon>
      </Dock>
    </div>
  );
}
