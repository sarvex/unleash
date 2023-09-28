/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import useSwr from 'swr';
import type { SWRConfiguration, Key } from 'swr';
import type {
    NotificationsSchema,
    MarkNotificationsAsReadSchema,
} from '../models';
import { fetcher } from '../fetcher';
import type { ErrorType, BodyType } from '../fetcher';

/**
 * A user may get relevant notifications from the projects they are a member of
 * @summary Retrieves a list of notifications
 */
export const getNotifications = () => {
    return fetcher<NotificationsSchema>({
        url: `/api/admin/notifications`,
        method: 'get',
    });
};

export const getGetNotificationsKey = () =>
    [`/api/admin/notifications`] as const;

export type GetNotificationsQueryResult = NonNullable<
    Awaited<ReturnType<typeof getNotifications>>
>;
export type GetNotificationsQueryError = ErrorType<unknown>;

/**
 * @summary Retrieves a list of notifications
 */
export const useGetNotifications = <TError = ErrorType<unknown>>(options?: {
    swr?: SWRConfiguration<
        Awaited<ReturnType<typeof getNotifications>>,
        TError
    > & { swrKey?: Key; enabled?: boolean };
}) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetNotificationsKey() : null));
    const swrFn = () => getNotifications();

    const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
        swrKey,
        swrFn,
        swrOptions
    );

    return {
        swrKey,
        ...query,
    };
};

/**
 * Allow to select which notifications were read and saving a read date
 * @summary Mark notifications as read
 */
export const markNotificationsAsRead = (
    markNotificationsAsReadSchema: BodyType<MarkNotificationsAsReadSchema>
) => {
    return fetcher<void>({
        url: `/api/admin/notifications/read`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: markNotificationsAsReadSchema,
    });
};