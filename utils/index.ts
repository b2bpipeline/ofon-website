import type { z } from 'zod';

export * from './validators';

/**
 * A utility object for displaying toast messages.
 */
export const toast = {
    /**
     * Displays a success toast message.
     * @param message - The message to be displayed.
     */
    success(message: string): void {
        useToast().add({
            title: 'Success',
            description: message,
            icon: 'i-heroicons-check-circle',
            color: 'green',
            timeout: 10000,
        });
    },

    /**
     * Displays an error toast message.
     * @param message - The message to be displayed.
     */
    error(message: string): void {
        useToast().add({
            title: 'Failed',
            description: message,
            icon: 'i-heroicons-x-circle',
            color: 'red',
            timeout: 10000,
        });
    },
};

/**
 * Returns the error message from a Zod parse result.
 * @param result - The Zod parse result.
 * @returns The error message.
 */
export function getZodErrorMessage(result: z.SafeParseError<any>): string {
    let errorMessage = '';

    result.error.issues.forEach((issue) => {
        errorMessage = errorMessage + issue.path[0] + ': ' + issue.message + '. ';
    });

    return errorMessage;
}

export function getNestErrorMessage(error: unknown): string {
    let message: string;

    if (error instanceof Error && 'response' in error && error.response && (error.response as { _data: any })._data) {
        if (typeof (error.response as { _data: any })._data.errors === 'string') {
            message = (error.response as { _data: any })._data.errors;
        } else if (Array.isArray((error.response as { _data: any })._data.errors)) {
            message = (error.response as { _data: any })._data.errors[0];
        } else {
            message = 'Something went wrong, please try again later.';
        }
    } else {
        message = 'Something went wrong, please try again later.';
    }

    return message;
}

export function getErrorMessage(error: unknown): string {
    let message: string;

    if (error instanceof Error && 'response' in error && error.response && (error.response as { _data: any })._data) {
        if (typeof (error.response as { _data: any })._data.statusMessage === 'string') {
            message = (error.response as { _data: any })._data.statusMessage;
        } else if (Array.isArray((error.response as { _data: any })._data.statusMessage)) {
            message = (error.response as { _data: any })._data.statusMessage[0];
        } else {
            message = 'Something went wrong, please try again later.';
        }
    } else {
        message = 'Something went wrong, please try again later.';
    }

    return message;
}
