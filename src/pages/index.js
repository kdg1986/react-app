import withComponentSplitting from '@/components/withComponentSplitting';

export const Inbox = withComponentSplitting( () => import('@/pages/inbox') );
export const Inbox2 = withComponentSplitting( () => import('@/pages/inbox2') );

