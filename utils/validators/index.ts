import { z } from 'zod';

export const createWaitlistSchema = z.object({
    first_name: z.string().min(1, { message: 'First name is required.' }),
    last_name: z.string().min(1, { message: 'Last name is required.' }),
    email: z.string().email({ message: 'Invalid email address.' }),
    mobile_phone: z.string().optional(),
    company_name: z.string().min(1, { message: 'Company name is required.' }),
    website: z.string().min(1, { message: 'Company website is required.' }).optional(),
    size_id: z.string().min(1, { message: 'Number of employees is required.' }),
    message: z.string().trim().min(1, { message: 'Please provide a message with at least 1 characters.' }),
    source: z.string().min(1, { message: 'Source is required.' }),
    user_id: z.string().min(1, { message: 'User ID is required.' }),
    organization_id: z.number(),
});
