import type { H3Event } from 'h3';
import { createWaitlistSchema, getNestErrorMessage, getZodErrorMessage } from '~/utils';

/**
 * Handles the POST request for creating a waitlist.
 *
 * @param event - The H3Event object representing the event.
 */
export default defineEventHandler(async (event: H3Event) => {
    const zodResult = await readValidatedBody(event, createWaitlistSchema.safeParse);
    if (!zodResult.success) {
        console.error('Error validating body:', zodResult.error);
        throw createError({ status: 400, statusMessage: getZodErrorMessage(zodResult) });
    }

    const runtimeConfig = useRuntimeConfig();
    try {
        await $fetch(`${runtimeConfig.BACKEND_URL}/crm/add-to-lead-from-form`, {
            method: 'POST',
            body: JSON.stringify(zodResult.data),
        });
    } catch (error) {
        console.error('Error creating waitlist (SERVER):', error);
        throw createError({ status: 500, statusMessage: getNestErrorMessage(error) });
    }
});
