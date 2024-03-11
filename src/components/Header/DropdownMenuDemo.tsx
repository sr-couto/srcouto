import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropdownMenuDemo() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="uppercase">Menú</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 translate-y-3 border-secondary " align="end" side="bottom" >
        <DropdownMenuLabel>Secciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <a href="/" aria-label="Ir a página de inicio">
              Inicio
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/traducciones" aria-label="Ir a página de Traducciones">
              Traducciones
            </a>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <a href="/contacto" aria-label="Ir a página de contacto">
              Contacto
            </a>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
