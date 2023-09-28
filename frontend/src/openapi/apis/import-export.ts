/**
 * Generated by Orval
 * Do not edit manually.
 * See `gen:api` script in package.json
 */
import useSwr from 'swr';
import type { SWRConfiguration, Key } from 'swr';
import type {
    ExportResultSchema,
    ExportQuerySchema,
    ImportTogglesValidateSchema,
    ImportTogglesSchema,
    StateSchema,
    _ExportParams,
} from '../models';
import { fetcher } from '../fetcher';
import type { ErrorType, BodyType } from '../fetcher';

/**
 * Exports all features listed in the `features` property from the environment specified in the request body. If set to `true`, the `downloadFile` property will let you download a file with the exported data. Otherwise, the export data is returned directly as JSON. Refer to the documentation for more information about [Unleash's export functionality](https://docs.getunleash.io/reference/deploy/environment-import-export#export).
 * @summary Export feature toggles from an environment
 */
export const exportFeatures = (
    exportQuerySchema: BodyType<ExportQuerySchema>
) => {
    return fetcher<ExportResultSchema>({
        url: `/api/admin/features-batch/export`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: exportQuerySchema,
    });
};

/**
 * Validates a feature toggle data set. Checks whether the data can be imported into the specified project and environment. The returned value is an object that contains errors, warnings, and permissions required to perform the import, as described in the [import documentation](https://docs.getunleash.io/reference/deploy/environment-import-export#import).
 * @summary Validate feature import data
 */
export const validateImport = (
    importTogglesSchema: BodyType<ImportTogglesSchema>
) => {
    return fetcher<ImportTogglesValidateSchema>({
        url: `/api/admin/features-batch/validate`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: importTogglesSchema,
    });
};

/**
 * [Import feature toggles](https://docs.getunleash.io/reference/deploy/environment-import-export#import) into a specific project and environment.
 * @summary Import feature toggles
 */
export const importToggles = (
    importTogglesSchema: BodyType<ImportTogglesSchema>
) => {
    return fetcher<void>({
        url: `/api/admin/features-batch/import`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: importTogglesSchema,
    });
};

/**
 * Imports state into the system. Deprecated in favor of /api/admin/features-batch/import
 * @deprecated
 * @summary Import state (deprecated)
 */
export const _import = (stateSchema: BodyType<StateSchema>) => {
    return fetcher<void>({
        url: `/api/admin/state/import`,
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        data: stateSchema,
    });
};

/**
 * Exports the current state of the system. Deprecated in favor of /api/admin/features-batch/export
 * @deprecated
 * @summary Export state (deprecated)
 */
export const _export = (params?: _ExportParams) => {
    return fetcher<StateSchema>({
        url: `/api/admin/state/export`,
        method: 'get',
        params,
    });
};

export const getExportKey = (params?: _ExportParams) =>
    [`/api/admin/state/export`, ...(params ? [params] : [])] as const;

export type _ExportQueryResult = NonNullable<
    Awaited<ReturnType<typeof _export>>
>;
export type _ExportQueryError = ErrorType<unknown>;

/**
 * @deprecated
 * @summary Export state (deprecated)
 */
export const useExport = <TError = ErrorType<unknown>>(
    params?: _ExportParams,
    options?: {
        swr?: SWRConfiguration<Awaited<ReturnType<typeof _export>>, TError> & {
            swrKey?: Key;
            enabled?: boolean;
        };
    }
) => {
    const { swr: swrOptions } = options ?? {};

    const isEnabled = swrOptions?.enabled !== false;
    const swrKey =
        swrOptions?.swrKey ?? (() => (isEnabled ? getExportKey(params) : null));
    const swrFn = () => _export(params);

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