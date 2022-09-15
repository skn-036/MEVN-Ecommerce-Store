import * as yup from 'yup';
import { YupValidationOutput } from '@/types/validation/validation';

export const runYupValidation = async (
	schema: yup.AnyObjectSchema,
	validatingValues: object
): Promise<YupValidationOutput> => {
	try {
		const validated = await schema.validate(validatingValues, {
			abortEarly: false,
		});
		return {
			validated: true,
			data: validatingValues,
		};
	} catch (error) {
		if (error instanceof yup.ValidationError) {
			return {
				validated: false,
				errors: error.inner.reduce((prev, err, index) => {
					const { path, message } = err;
					return { ...prev, [path ? path : index]: message };
				}, {}),
			};
		}
		return {
			validated: false,
		};
	}
};
