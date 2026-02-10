import { Footer } from '@/app/(landing)/components/footer';
import Header from '@/components/layout/header';
import { cache } from 'react';

/**
 * Cached version of the Header component for use in static shells.
 * This helps with Partial Prerendering (PPR) by marking the component as a static part of the shell.
 */
export const StaticHeader = cache(() => <Header />);

/**
 * Cached version of the Footer component for use in static shells.
 */
export const StaticFooter = cache(() => <Footer />);
