export const Footer = () => {
  return (
    <footer className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} सर नीचे काम ऊपर
        </p>
        <p className="text-center text-xs text-muted-foreground mt-2">
          design inspired from{' '}
          <a
            href="https://www.0xsarthak.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-foreground transition-colors"
          >
            0xSarthak
          </a>
        </p>
      </div>
    </footer>
  );
};

