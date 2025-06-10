import emailjs from '@emailjs/browser';

export const sendEmail = async (formData: {name: string, email:string, message:string}) => {
    const serviceID = 'service_a21btm2';
    const templateID = 'template_pceh6me';
    const publicKey = '6Ya4KyKocRNfcIXHZ';

    const templateParams = {
        name: formData.name,
        email: formData.email,
        question: formData.message,
    };

    try {
        const response = await emailjs.send(serviceID, templateID, templateParams, publicKey);
        return response;
    } catch (error) {
        console.error('Ошибка при отправке email:', error);
        throw error;
    }
};