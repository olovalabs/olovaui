"use client";
import { cn } from "@/lib/utils";
import {
    Download,
    Expand,
    ExternalLink,
    Eye,
    EyeOff,
    Grid,
    Maximize2,
    Minimize2,
    Monitor,
    RotateCw,
    Share,
    Smartphone,
    Tablet,
    ZoomIn,
    ZoomOut,
} from "lucide-react";
import { cloneElement, useCallback, useEffect, useRef, useState } from "react";

type ViewportSize = "mobile" | "tablet" | "desktop" | "fullscreen";
type Theme = "light" | "dark" | "auto";
type BackgroundPattern = "none" | "dots" | "grid" | "lines" | "checkerboard";

type ComponentPreviewProps = {
  component: React.ReactElement;
  reTrigger?: boolean;
  className?: string;
  componentName?: string;
  showViewports?: boolean;
  showBackgroundOptions?: boolean;
  defaultViewport?: ViewportSize;
  defaultTheme?: Theme;
  defaultBackground?: BackgroundPattern;
  allowFullscreen?: boolean;
  showRuler?: boolean;
  enableZoom?: boolean;
  customActions?: Array<{
    icon: React.ComponentType<{ size?: number; className?: string }>;
    label: string;
    onClick: () => void;
  }>;
};

const viewportSizes = {
  mobile: { width: 375, height: 667, icon: Smartphone },
  tablet: { width: 768, height: 1024, icon: Tablet },
  desktop: { width: 1200, height: 800, icon: Monitor },
  fullscreen: { width: "100%", height: "100%", icon: Maximize2 },
};

const backgroundPatterns = {
  none: "bg-white dark:bg-black",
  dots: "bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]",
  grid: "bg-white dark:bg-black bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#374151_1px,transparent_1px),linear-gradient(to_bottom,#374151_1px,transparent_1px)] [background-size:16px_16px]",
  lines:
    "bg-white dark:bg-black bg-[linear-gradient(45deg,#e5e7eb_1px,transparent_1px)] dark:bg-[linear-gradient(45deg,#374151_1px,transparent_1px)] [background-size:8px_8px]",
  checkerboard:
    "bg-white dark:bg-black bg-[linear-gradient(45deg,#f3f4f6_25%,transparent_25%),linear-gradient(-45deg,#f3f4f6_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#f3f4f6_75%),linear-gradient(-45deg,transparent_75%,#f3f4f6_75%)] dark:bg-[linear-gradient(45deg,#1f2937_25%,transparent_25%),linear-gradient(-45deg,#1f2937_25%,transparent_25%),linear-gradient(45deg,transparent_75%,#1f2937_75%),linear-gradient(-45deg,transparent_75%,#1f2937_75%)] [background-size:16px_16px] [background-position:0_0,0_8px,8px_-8px,-8px_0px]",
};

export function ComponentRenderer({
  component,
  className,
  reTrigger = false,
  componentName,
  showViewports = true,
  showBackgroundOptions = true,
  defaultViewport = "desktop",
  defaultTheme = "auto",
  defaultBackground = "none",
  allowFullscreen = true,
  showRuler = false,
  enableZoom = false,
  customActions = [],
}: ComponentPreviewProps) {
  const [key, setKey] = useState(0);
  const [viewport, setViewport] = useState<ViewportSize>(defaultViewport);
  const [background, setBackground] =
    useState<BackgroundPattern>(defaultBackground);
  const [theme] = useState<Theme>(defaultTheme);
  const [isFullPage, setIsFullPage] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [zoom, setZoom] = useState(100);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const changeKey = useCallback(() => {
    setIsLoading(true);
    setKey((prev) => prev + 1);
    // Simulate loading state
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const handleFullPage = useCallback(() => {
    setIsFullPage(!isFullPage);
  }, [isFullPage]);

  const handleNewPage = useCallback(() => {
    if (componentName) {
      const standaloneUrl = `/standalone/${componentName}`;
      window.open(standaloneUrl, "_blank");
    }
  }, [componentName]);

  const handleShare = useCallback(async () => {
    if (componentName && navigator.share) {
      try {
        await navigator.share({
          title: `Component: ${componentName}`,
          url: window.location.href,
        });
      } catch {
        // Fallback to clipboard
        navigator.clipboard.writeText(window.location.href);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  }, [componentName]);

  const handleDownload = useCallback(() => {
    // This would need to be implemented based on your specific needs
    // Download functionality to be implemented
  }, []);

  const adjustZoom = useCallback((delta: number) => {
    setZoom((prev) => Math.max(25, Math.min(200, prev + delta)));
  }, []);

  const resetZoom = useCallback(() => {
    setZoom(100);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey) {
        switch (event.key) {
          case "r":
            event.preventDefault();
            changeKey();
            break;
          case "f":
            event.preventDefault();
            handleFullPage();
            break;

          case "=":
          case "+":
            if (enableZoom) {
              event.preventDefault();
              adjustZoom(25);
            }
            break;
          case "-":
            if (enableZoom) {
              event.preventDefault();
              adjustZoom(-25);
            }
            break;
          case "0":
            if (enableZoom) {
              event.preventDefault();
              resetZoom();
            }
            break;
        }
      }
    };

    if (isFullPage) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [
    isFullPage,
    changeKey,
    handleFullPage,
    adjustZoom,
    resetZoom,
    enableZoom,
  ]);

  const currentSize = viewportSizes[viewport];
  const currentBg = backgroundPatterns[background];

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative w-full rounded-lg not-prose",
        isFullPage
          ? "fixed inset-0 top-0 z-50 min-h-screen rounded-none overflow-hidden bg-background"
          : "min-h-[350px]",
        className,
      )}
    >
      {/* Control Bar */}
      {showControls && (
        <div
          className={cn(
            "flex items-center justify-between gap-2 p-3 border-b bg-muted/30",
            isFullPage ? "sticky top-0 z-50" : "",
          )}
        >
          <div className="flex items-center gap-2">
            {componentName && (
              <span className="text-sm font-medium text-muted-foreground">
                {componentName}
              </span>
            )}
            {showRuler && viewport !== "fullscreen" && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {currentSize.width} × {currentSize.height}
              </span>
            )}
            {enableZoom && zoom !== 100 && (
              <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                {zoom}%
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            {/* Viewport Controls */}
            {showViewports && (
              <div className="flex items-center gap-1 border rounded p-1">
                {Object.entries(viewportSizes).map(([size, config]) => (
                  <button
                    key={size}
                    onClick={() => setViewport(size as ViewportSize)}
                    className={cn(
                      "p-1.5 rounded hover:bg-muted transition-colors",
                      viewport === size
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground",
                    )}
                    title={`${size} view`}
                  >
                    <config.icon size={16} />
                  </button>
                ))}
              </div>
            )}

            {/* Background Options */}
            {showBackgroundOptions && (
              <div className="relative">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground"
                  title="Background options"
                >
                  <Grid size={16} />
                </button>
                {showDropdown && (
                  <div className="absolute top-full right-0 mt-1 bg-popover border rounded-md shadow-lg z-50 min-w-[120px]">
                    {Object.keys(backgroundPatterns).map((pattern) => (
                      <button
                        key={pattern}
                        onClick={() => {
                          setBackground(pattern as BackgroundPattern);
                          setShowDropdown(false);
                        }}
                        className={cn(
                          "w-full text-left px-3 py-2 text-sm hover:bg-muted transition-colors capitalize",
                          background === pattern ? "bg-muted" : "",
                        )}
                      >
                        {pattern}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Zoom Controls */}
            {enableZoom && (
              <>
                <button
                  onClick={() => adjustZoom(-25)}
                  className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground"
                  title="Zoom out"
                  disabled={zoom <= 25}
                >
                  <ZoomOut size={16} />
                </button>
                <button
                  onClick={resetZoom}
                  className="px-2 py-1 text-xs rounded hover:bg-muted transition-colors text-muted-foreground"
                  title="Reset zoom"
                >
                  {zoom}%
                </button>
                <button
                  onClick={() => adjustZoom(25)}
                  className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground"
                  title="Zoom in"
                  disabled={zoom >= 200}
                >
                  <ZoomIn size={16} />
                </button>
              </>
            )}

            {/* Custom Actions */}
            {customActions.map((action, index) => (
              <button
                key={index}
                onClick={action.onClick}
                className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground"
                title={action.label}
              >
                <action.icon size={16} />
              </button>
            ))}

            {/* Refresh */}
            {reTrigger && (
              <button
                onClick={changeKey}
                disabled={isLoading}
                className={cn(
                  "p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground",
                  isLoading && "animate-spin",
                )}
                title="Refresh component"
              >
                <RotateCw size={16} />
              </button>
            )}

            {/* More Actions */}
            <div className="flex items-center gap-1 border-l pl-2 ml-1">
              {componentName && (
                <>
                  <button
                    onClick={handleShare}
                    className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground"
                    title="Share component"
                  >
                    <Share size={16} />
                  </button>
                  <button
                    onClick={handleDownload}
                    className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground"
                    title="Download component"
                  >
                    <Download size={16} />
                  </button>
                  <button
                    onClick={handleNewPage}
                    className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground"
                    title="Open in new page"
                  >
                    <ExternalLink size={16} />
                  </button>
                </>
              )}

              {allowFullscreen && (
                <button
                  onClick={handleFullPage}
                  className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground"
                  title="Toggle fullscreen"
                >
                  {isFullPage ? <Minimize2 size={16} /> : <Expand size={16} />}
                </button>
              )}

              <button
                onClick={() => setShowControls(!showControls)}
                className="p-1.5 rounded hover:bg-muted transition-colors text-muted-foreground lg:hidden"
                title="Toggle controls"
              >
                {showControls ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex h-full">
        {/* Preview Area */}
        <div
          className={cn(
            "flex-1 flex items-center justify-center relative overflow-auto",
            currentBg,
            theme === "dark" && "dark",
            isFullPage ? "min-h-screen" : "min-h-[350px]",
          )}
          style={{
            ...(viewport !== "fullscreen" && {
              maxWidth: currentSize.width,
              maxHeight: currentSize.height,
              margin: "0 auto",
            }),
          }}
        >
          <div
            ref={previewRef}
            className={cn(
              "w-full h-full flex items-center justify-center transition-transform duration-200",
              viewport !== "fullscreen" &&
                "max-w-full max-h-full overflow-auto",
              isLoading && "opacity-50",
            )}
            style={{
              transform: enableZoom ? `scale(${zoom / 100})` : undefined,
              transformOrigin: "center center",
            }}
          >
            {reTrigger ? cloneElement(component, { key }) : component}
          </div>

          {/* Loading Overlay */}
          {isLoading && (
            <div className="absolute inset-0 bg-background/20 flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          )}
        </div>
      </div>

      {/* Keyboard Shortcuts Help */}
      {isFullPage && (
        <div className="absolute bottom-4 right-4 bg-popover border rounded-md shadow-lg p-3 text-xs space-y-1 opacity-80 hover:opacity-100 transition-opacity">
          <div className="font-medium mb-2">Shortcuts</div>
          <div>⌘+R - Refresh</div>
          <div>⌘+F - Fullscreen</div>
          {enableZoom && (
            <>
              <div>⌘+/⌘- - Zoom</div>
              <div>⌘+0 - Reset Zoom</div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
