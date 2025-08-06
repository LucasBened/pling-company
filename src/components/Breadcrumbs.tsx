import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  name: string;
  href: string;
  current?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="w-full">
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        className="flex items-center space-x-2 text-sm text-gray-600"
      >
        <li
          itemProp="itemListElement"
          itemScope
          itemType="https://schema.org/ListItem"
        >
          <a
            href="/"
            itemProp="item"
            className="flex items-center hover:text-pastel-green transition-colors"
            aria-label="Página inicial"
          >
            <Home className="w-4 h-4" />
            <span itemProp="name" className="sr-only">
              Home
            </span>
          </a>
          <meta itemProp="position" content="1" />
        </li>

        {items.map((item, index) => (
          <li
            key={item.href}
            itemProp="itemListElement"
            itemScope
            itemType="https://schema.org/ListItem"
            className="flex items-center"
          >
            <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            {item.current ? (
              <span
                itemProp="name"
                className="font-medium text-smooth-black"
                aria-current="page"
              >
                {item.name}
              </span>
            ) : (
              <a
                href={item.href}
                itemProp="item"
                className="hover:text-pastel-green transition-colors"
              >
                <span itemProp="name">{item.name}</span>
              </a>
            )}
            <meta itemProp="position" content={String(index + 2)} />
          </li>
        ))}
      </ol>
    </nav>
  );
}
