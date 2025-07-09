import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Instagram} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { sendEmail } from '../../emailService.ts';

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error'>('success');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement)?.value,
      email: (form.elements.namedItem('email') as HTMLInputElement)?.value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement)?.value,
    };

    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage("Пожалуйста, заполните все поля.");
      setStatusType("error");
      return;
    }

    try {
      await sendEmail(formData);
      setStatusMessage("Сообщение отправлено!");
      setStatusType("success");
      form.reset();
    } catch (err) {
      console.error(err);
      setStatusMessage("Ошибка при отправке. Попробуйте ещё раз.");
      setStatusType("error");
    }
  };

  return (
    <section id="contact" className="section-padding bg-[rgb(18,18,18)] relative overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('contact.title')}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required={true}
                  className="w-full bg-tertiary border-0 rounded p-3 text-white focus:ring-1 focus:ring-white"
                  placeholder={t('contact.form.namePlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required={true}
                  className="w-full bg-tertiary border-0 rounded p-3 text-white focus:ring-1 focus:ring-white"
                  placeholder={t('contact.form.emailPlaceholder')}
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required={true}
                  className="w-full bg-tertiary border-0 rounded p-3 text-white focus:ring-1 focus:ring-white"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
              </div>
              {statusMessage && (
                  <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`mt-4 text-sm px-4 py-2 rounded ${
                          statusType === 'success'
                              ? 'bg-green-500/10 text-green-300'
                              : 'bg-red-500/10 text-red-300'
                      }`}
                  >
                    {statusMessage}
                  </motion.div>
              )}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="btn btn-primary flex items-center"
              >
                <span>{t('contact.form.send')}</span>
                <Send className="ml-2 w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.info.title')}</h3>
              <p className="text-gray-400 mb-2">Email: masiania2906@gmail.com</p>
              <p className="text-gray-400 mb-2">{t('contact.info.phone')}: +48 577 762 106</p>
              <p className="text-gray-400">{t('contact.info.location')}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.info.workingHours')}</h3>
              <p className="text-gray-400 mb-2">{t('contact.info.schedule.weekdays')}</p>
              <p className="text-gray-400">{t('contact.info.schedule.weekends')}</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">{t('contact.info.socialMedia')}</h3>
              <div className="flex space-x-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.instagram.com/13masiania/"
                  target="_blank"
                  className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center"
                >
                  <Instagram className="w-5 h-5" />
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://t.me/maksfitnes?fbclid=PAZXh0bgNhZW0CMTEAAafKMDURfofWMjsYD2Vgw5qTqqKaTXc3n730ZN3nqHWoaOD9g7is28kp2mcvtA_aem_UtdXBhf1dnXbE4BmzW2Ivg"
                    target="_blank"
                    className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center"
                >
                  <Send className="w-5 h-5" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.threads.com/@13masiania"
                  target="_blank"
                  className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" width="18" viewBox="0 0 440 511.43"><path fill="#fff" fillRule="nonzero" d="M342.383 237.038a177.282 177.282 0 00-6.707-3.046c-3.948-72.737-43.692-114.379-110.429-114.805-38.505-.255-72.972 15.445-94.454 48.041l36.702 25.178c15.265-23.159 39.221-28.096 56.864-28.096.204 0 .408 0 .61.002 21.974.14 38.555 6.529 49.287 18.987 7.81 9.071 13.034 21.606 15.621 37.425-19.483-3.311-40.553-4.329-63.077-3.038-63.45 3.655-104.24 40.661-101.501 92.08 1.391 26.083 14.385 48.523 36.587 63.181 18.772 12.391 42.95 18.45 68.077 17.079 33.183-1.819 59.215-14.48 77.377-37.63 13.793-17.58 22.516-40.363 26.368-69.069 15.814 9.544 27.535 22.103 34.007 37.2 11.006 25.665 11.648 67.84-22.764 102.223-30.15 30.121-66.392 43.151-121.164 43.554-60.758-.45-106.708-19.935-136.583-57.915-27.976-35.562-42.434-86.93-42.973-152.674.539-65.746 14.997-117.114 42.973-152.676 29.875-37.979 75.824-57.463 136.582-57.914 61.197.455 107.948 20.033 138.967 58.195 15.21 18.713 26.676 42.248 34.236 69.688L440 161.532c-9.163-33.775-23.582-62.881-43.203-87.017C357.031 25.59 298.872.519 223.936 0h-.3C148.851.518 91.344 25.683 52.709 74.795 18.331 118.499.598 179.308.002 255.535l-.002.18.002.18c.596 76.225 18.329 137.037 52.707 180.741 38.635 49.11 96.142 74.277 170.927 74.794h.3c66.486-.462 113.352-17.868 151.96-56.442 50.51-50.463 48.99-113.718 32.342-152.549-11.945-27.847-34.716-50.463-65.855-65.401zM227.587 344.967c-27.808 1.567-56.699-10.916-58.124-37.651-1.056-19.823 14.108-41.942 59.831-44.577a266.87 266.87 0 0115.422-.45c16.609 0 32.145 1.613 46.271 4.701-5.268 65.798-36.172 76.483-63.4 77.977z"/></svg>
                </motion.a>
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.tiktok.com/@13masiania"
                    target="_blank"
                    className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" viewBox="0 0 293768 333327" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd"><path d="M204958 0c5369 45832 32829 78170 77253 81022v43471l-287 27V87593c-44424-2850-69965-30183-75333-76015l-47060-1v192819c6791 86790-60835 89368-86703 56462 30342 18977 79608 6642 73766-68039V0h58365zM78515 319644c-26591-5471-50770-21358-64969-44588-34496-56437-3401-148418 96651-157884v54345l-164 27v-40773C17274 145544 7961 245185 33650 286633c9906 15984 26169 27227 44864 33011z" fill="#26f4ee"/><path d="M218434 11587c3505 29920 15609 55386 35948 70259-27522-10602-43651-34934-47791-70262l11843 3zm63489 82463c3786 804 7734 1348 11844 1611v51530c-25770 2537-48321-5946-74600-21749l4034 88251c0 28460 106 41467-15166 67648-34260 58734-95927 63376-137628 35401 54529 22502 137077-4810 136916-103049v-96320c26279 15803 48830 24286 74600 21748V94050zm-171890 37247c5390-1122 11048-1985 16998-2548v54345c-21666 3569-35427 10222-41862 22528-20267 38754 5827 69491 35017 74111-33931 5638-73721-28750-49999-74111 6434-12304 18180-18959 39846-22528v-51797zm64479-119719h1808-1808z" fill="#fb2c53"/><path d="M206590 11578c5369 45832 30910 73164 75333 76015v51528c-25770 2539-48321-5945-74600-21748v96320c206 125717-135035 135283-173673 72939-25688-41449-16376-141089 76383-155862v52323c-21666 3569-33412 10224-39846 22528-39762 76035 98926 121273 89342-1225V11577l47060 1z" fill="#ffffff"/></svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -z-10 -bottom-20 -right-20 w-72 h-72 bg-tertiary rounded-full opacity-10 blur-3xl"></div>
    </section>
  );
};

export default Contact;