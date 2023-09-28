/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import useSwr from 'swr';
import type { SWRConfiguration, Key } from 'swr';
import type {
    StrategiesSchema,
    GetAllStrategies401,
    StrategySchema,
    CreateStrategySchema,
    GetStrategy401,
    GetStrategy404,
    UpdateStrategySchema,
    ContextFieldStrategiesSchema,
    GetStrategiesByContextField401,
    UpdateFeatureStrategySegmentsSchema,
} from '../models';
import { fetcher } from '../fetcher';
import type { ErrorType, BodyType } from '../fetcher';

/**
 * Retrieves all strategy types ([predefined](https://docs.getunleash.io/reference/activation-strategies "predefined strategies") and [custom strategies](https://docs.getunleash.io/reference/custom-activation-strategies)) that are defined on this Unleash instance.
 * @summary Get all strategies
 */
export const getAllStrategies = () => {
    return fetcher<StrategiesSchema>({
        url: `/api/admin/strategies`,
        method: 'get',
    });
};

export const getGetAllStrategiesKey = () => [`/api/admin/strategies`] as const;

export type GetAllStrategiesQueryResult = NonNullable<
    Awaited<ReturnType<typeof getAllStrategies>>
>;
export type GetAllStrategiesQueryError = ErrorType<GetAllStrategies401>;

/**
 * @summary Get all strategies
 */
export const useGetAllStrategies = <
    TError = ErrorType<GetAllStrategies401>
>(options?: {
    swr?: SWRConfiguration<
        Awaited<ReturnType<typeof getAllStrategies>>,
        TError
    > & { swrKey?: Key; enabled?: boolean };
}) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetAllStrategiesKey() : null));
    const swrFn = () => getAllStrategies();

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
 * Creates a strategy type based on the supplied data.
 * @summary Create a strategy
 */
export const createStrategy = (
    createStrategySchema: BodyType<CreateStrategySchema>
) => {
    return fetcher<StrategySchema>({
        url: `/api/admin/strategies`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: createStrategySchema,
    });
};

/**
 * Retrieves the definition of the strategy specified in the URL
 * @summary Get a strategy definition
 */
export const getStrategy = (name: string) => {
    return fetcher<StrategySchema>({
        url: `/api/admin/strategies/${name}`,
        method: 'get',
    });
};

export const getGetStrategyKey = (name: string) =>
    [`/api/admin/strategies/${name}`] as const;

export type GetStrategyQueryResult = NonNullable<
    Awaited<ReturnType<typeof getStrategy>>
>;
export type GetStrategyQueryError = ErrorType<GetStrategy401 | GetStrategy404>;

/**
 * @summary Get a strategy definition
 */
export const useGetStrategy = <
    TError = ErrorType<GetStrategy401 | GetStrategy404>
>(
    name: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getStrategy>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!name;
    const swrKey =
        swrOptions?.swrKey ??
        (() => (isEnabled ? getGetStrategyKey(name) : null));
    const swrFn = () => getStrategy(name);

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
 * Deletes the specified strategy definition
 * @summary Delete a strategy
 */
export const removeStrategy = (name: string) => {
    return fetcher<void>({
        url: `/api/admin/strategies/${name}`,
        method: 'delete',
    });
};

/**
 * Updates the specified strategy type. Any properties not specified in the request body are left untouched.
 * @summary Update a strategy type
 */
export const updateStrategy = (
    name: string,
    updateStrategySchema: BodyType<UpdateStrategySchema>
) => {
    return fetcher<void>({
        url: `/api/admin/strategies/${name}`,
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        data: updateStrategySchema,
    });
};

/**
 * Marks the specified strategy as deprecated.
 * @summary Deprecate a strategy
 */
export const deprecateStrategy = (strategyName: string) => {
    return fetcher<void>({
        url: `/api/admin/strategies/${strategyName}/deprecate`,
        method: 'post',
    });
};

/**
 * Marks the specified strategy as not deprecated. If the strategy wasn't already deprecated, nothing changes.
 * @summary Reactivate a strategy
 */
export const reactivateStrategy = (strategyName: string) => {
    return fetcher<void>({
        url: `/api/admin/strategies/${strategyName}/reactivate`,
        method: 'post',
    });
};

/**
 * Retrieves a list of all strategies that use the specified context field. If the context field doesn't exist, returns an empty list of strategies
 * @summary Get strategies that use a context field
 */
export const getStrategiesByContextField = (contextField: string) => {
    return fetcher<ContextFieldStrategiesSchema>({
        url: `/api/admin/context/${contextField}/strategies`,
        method: 'get',
    });
};

export const getGetStrategiesByContextFieldKey = (contextField: string) =>
    [`/api/admin/context/${contextField}/strategies`] as const;

export type GetStrategiesByContextFieldQueryResult = NonNullable<
    Awaited<ReturnType<typeof getStrategiesByContextField>>
>;
export type GetStrategiesByContextFieldQueryError =
    ErrorType<GetStrategiesByContextField401>;

/**
 * @summary Get strategies that use a context field
 */
export const useGetStrategiesByContextField = <
    TError = ErrorType<GetStrategiesByContextField401>
>(
    contextField: string,
    options?: {
        swr?: SWRConfiguration<
            Awaited<ReturnType<typeof getStrategiesByContextField>>,
            TError
        > & { swrKey?: Key; enabled?: boolean };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false && !!contextField;
    const swrKey =
        swrOptions?.swrKey ??
        (() =>
            isEnabled ? getGetStrategiesByContextFieldKey(contextField) : null);
    const swrFn = () => getStrategiesByContextField(contextField);

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
 * Sets the segments of the strategy specified to be exactly the ones passed in the payload. Any segments that were used by the strategy before will be removed if they are not in the provided list of segments.
 * @summary Update strategy segments
 */
export const updateFeatureStrategySegments = (
    updateFeatureStrategySegmentsSchema: BodyType<UpdateFeatureStrategySegmentsSchema>
) => {
    return fetcher<UpdateFeatureStrategySegmentsSchema>({
        url: `/api/admin/segments/strategies`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: updateFeatureStrategySegmentsSchema,
    });
};