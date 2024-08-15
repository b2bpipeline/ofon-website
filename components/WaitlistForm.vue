7
<script setup lang="ts">
import type { z } from 'zod';
import type { FormSubmitEvent } from '#ui/types';

type CreateWaitlistType = z.infer<typeof createWaitlistSchema>;

const isSubmitting = ref(false);
const initialState: CreateWaitlistType = {
    first_name: '',
    last_name: '',
    email: '',
    mobile_phone: '',
    company_name: '',
    website: '',
    size_id: '',
    message: '',
    source: 'form',
    user_id: '1d7c5d75-0024-4f0e-9aef-94b73dc640c4',
    organization_id: 56,
};
const state = ref<CreateWaitlistType>({ ...initialState });

/**
 * Handles the submission of the waitlist form.
 *
 * @param {FormSubmitEvent<CreateWaitlistType>} event - The form submission event.
 * @returns {Promise<void>} - A promise that resolves when the form submission is complete.
 */
async function handleSubmit(event: FormSubmitEvent<CreateWaitlistType>) {
    try {
        isSubmitting.value = true;

        await $fetch('/api/waitlists', {
            method: 'POST',
            body: JSON.stringify(event.data),
        });

        state.value = { ...initialState };
        toast.success('Coungratulations! You have successfully signed up for the waitlist. We will get back to you soon.');
    } catch (e) {
        console.error('Error submitting form', e);
        toast.error(getErrorMessage(e));
    } finally {
        isSubmitting.value = false;
    }
}
</script>

<template>
    <UForm :schema="createWaitlistSchema" :state="state" class="space-y-5" @submit="handleSubmit" @error="console.error">
        <div class="grid gap-6 sm:grid-cols-2">
            <UFormGroup label="First Name" name="first_name" required>
                <UInput
                    v-model="state.first_name"
                    :disabled="isSubmitting"
                    :loading="isSubmitting"
                    color="gray"
                    placeholder="Enter your first name"
                />
            </UFormGroup>

            <UFormGroup label="Last Name" name="last_name" required>
                <UInput
                    v-model="state.last_name"
                    :disabled="isSubmitting"
                    :loading="isSubmitting"
                    color="gray"
                    placeholder="Enter your last name"
                />
            </UFormGroup>
        </div>

        <UFormGroup label="Work Email" name="email" required>
            <UInput
                v-model="state.email"
                :disabled="isSubmitting"
                :loading="isSubmitting"
                color="gray"
                placeholder="Enter your email address"
            />
        </UFormGroup>

        <UFormGroup label="Mobile phone number" name="mobile_phone" required>
            <UInput
                v-model="state.mobile_phone"
                :disabled="isSubmitting"
                :loading="isSubmitting"
                color="gray"
                placeholder="Enter your phone number"
            />
        </UFormGroup>

        <UFormGroup label="Company name" name="company_name" required>
            <UInput
                v-model="state.company_name"
                :disabled="isSubmitting"
                :loading="isSubmitting"
                color="gray"
                placeholder="Enter your company name"
            />
        </UFormGroup>

        <UFormGroup label="Website URL" name="website" required>
            <UInput
                v-model="state.website"
                :disabled="isSubmitting"
                :loading="isSubmitting"
                color="gray"
                placeholder="Enter your company website"
            />
        </UFormGroup>

        <UFormGroup label="Number of employees" name="size_id" required>
            <USelect
                v-model="state.size_id"
                :options="['1-10', '11-50', '51-200', '201-500', '501-1000', '1001-5000', '5001-10000', '10001+']"
                color="gray"
                :disabled="isSubmitting"
                :loading="isSubmitting"
                placeholder="Select the number of employees in your company"
            />
        </UFormGroup>

        <UFormGroup label="Message" name="message" required>
            <UTextarea
                v-model="state.message"
                :disabled="isSubmitting"
                :loading="isSubmitting"
                color="gray"
                placeholder="Enter your message"
            />
        </UFormGroup>

        <div>
            <UButton
                type="submit"
                size="lg"
                :disabled="isSubmitting"
                :loading="isSubmitting"
                color="black"
                class="mt-6 rounded-full px-6"
                >Submit</UButton
            >
        </div>
    </UForm>
</template>
