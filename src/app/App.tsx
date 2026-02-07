import { useState } from 'react';
import { Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import firstPageCat from '../assets/cat-main.png';
import sadCat from '../assets/cat-sad.png';
import happyCat from '../assets/cat-happy.png';

type Stage = 'question' | 'confirmation' | 'pleading' | 'card';

export default function App() {
  const [stage, setStage] = useState<Stage>('question');
  const [isCardOpen, setIsCardOpen] = useState(false);

  const handleFirstYes = () => {
    setStage('card');
  };

  const handleFirstNo = () => {
    setStage('confirmation');
  };

  const handleConfirmationYes = () => {
    setStage('pleading');
  };

  const handleConfirmationNo = () => {
    setStage('question');
  };

  const handlePleadingYes = () => {
    setStage('card');
  };

  const handlePleadingNo = () => {
    setStage('card');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-300 via-pink-400 to-rose-400 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-200/30"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: typeof window !== 'undefined' ? window.innerHeight + 50 : 1000,
              rotate: Math.random() * 360 
            }}
            animate={{ 
              y: -50,
              rotate: Math.random() * 360 + 360,
            }}
            transition={{ 
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
            style={{
              fontSize: `${Math.random() * 30 + 20}px`
            }}
          >
            <Heart fill="currentColor" />
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.h1 
        className="text-4xl md:text-6xl font-serif text-white mb-12 text-center drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Для моей любимой, Айым
      </motion.h1>

      <AnimatePresence mode="wait">
        {/* Question Stage */}
        {stage === 'question' && (
          <motion.div
            key="question"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            {/* Cute Cat Image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={firstPageCat}
                alt="Cute cat"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto shadow-2xl border-8 border-white/50"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-lg"
            >
              <Heart size={60} className="text-rose-500 mx-auto mb-6" fill="currentColor" />
              <h2 className="text-3xl md:text-5xl font-serif text-rose-600 mb-8">
                Ты будешь моим валентином?
              </h2>
              
              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFirstYes}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  Да ♥
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleFirstNo}
                  className="px-8 py-4 bg-gray-400 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  Нет
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Confirmation Stage */}
        {stage === 'confirmation' && (
          <motion.div
            key="confirmation"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            {/* Sad Cat Image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={sadCat}
                alt="Sad cat"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto shadow-2xl border-8 border-white/50"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-lg"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={60} className="text-gray-400 mx-auto mb-6" fill="currentColor" />
              </motion.div>
              <h2 className="text-3xl md:text-5xl font-serif text-gray-600 mb-8">
                Ты уверена? 
              </h2>
              
              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleConfirmationYes}
                  className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  Да, уверена
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleConfirmationNo}
                  className="px-8 py-4 bg-gray-400 text-white text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  Нет, вернуться
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Pleading Stage */}
        {stage === 'pleading' && (
          <motion.div
            key="pleading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            {/* Sad Cat Image */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <img 
                src={sadCat}
                alt="Sad cat"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full mx-auto shadow-2xl border-8 border-white/50"
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl max-w-lg"
            >
              <motion.div
                animate={{ rotate: [0, -10, 10, -10, 0] }}
                transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart size={60} className="text-gray-400 mx-auto mb-6" fill="currentColor" />
              </motion.div>
              <h2 className="text-2xl md:text-4xl font-serif text-gray-600 mb-4">
                Пожалуйста Жаным
              </h2>
              <p className="text-gray-500 text-lg mb-8 italic">
                (Если ты выберешь "Нет", я все равно покажу тебе открытку, но мне будет грустно)
              </p>
              
              <div className="flex gap-4 justify-center items-end">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePleadingYes}
                  className="px-6 py-3 bg-gray-500 text-white text-base font-bold rounded-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  Нет
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handlePleadingNo}
                  className="px-12 py-5 bg-gradient-to-r from-rose-500 to-pink-500 text-white text-2xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
                >
                  Хорошо, да ♥
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Card Stage */}
        {stage === 'card' && (
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-full flex flex-col items-center"
          >
            {/* Happy Cat Image */}
            <motion.div
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <img
                src={happyCat}
                alt="Happy cat with heart"
                className="w-48 h-48 md:w-64 md:h-64 object-contain mx-auto drop-shadow-2xl"
              />
            </motion.div>

            {/* Valentine Card */}
            <div className="relative" style={{ perspective: '1000px' }}>
              <motion.div
                className="relative w-[320px] h-[400px] md:w-[400px] md:h-[500px] cursor-pointer"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                whileHover={{ scale: isCardOpen ? 1 : 1.05 }}
                onClick={() => setIsCardOpen(!isCardOpen)}
              >
                {/* Card Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl shadow-2xl" />
                
                {/* Card Front (Left side when open) */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-rose-500 to-pink-600 rounded-2xl shadow-2xl flex items-center justify-center origin-left"
                  animate={{ 
                    rotateY: isCardOpen ? -160 : 0,
                  }}
                  transition={{ 
                    duration: 0.8,
                    ease: "easeInOut"
                  }}
                  style={{ 
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  <div className="text-center p-8">
                    <motion.div
                      animate={{ 
                        scale: isCardOpen ? 0.8 : [1, 1.2, 1],
                      }}
                      transition={{
                        scale: isCardOpen ? { duration: 0.3 } : { duration: 2, repeat: Infinity, repeatDelay: 1 }
                      }}
                    >
                      <Heart 
                        size={80} 
                        className="text-white mx-auto mb-4" 
                        fill="white"
                      />
                    </motion.div>
                    <p className="text-white text-2xl font-serif">
                      {isCardOpen ? '' : 'Нажми на меня'}
                    </p>
                  </div>
                </motion.div>

                {/* Card Inside */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-pink-50 to-rose-100 rounded-2xl shadow-inner flex items-center justify-center p-8 overflow-y-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isCardOpen ? 1 : 0 }}
                  transition={{ delay: isCardOpen ? 0.4 : 0, duration: 0.3 }}
                  style={{
                    pointerEvents: isCardOpen ? 'auto' : 'none'
                  }}
                >
                  <div className="text-center space-y-4 max-h-full">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: isCardOpen ? 1 : 0 }}
                      transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
                    >
                      <Heart 
                        size={50} 
                        className="text-rose-500 mx-auto mb-3" 
                        fill="currentColor"
                      />
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: isCardOpen ? 1 : 0,
                        y: isCardOpen ? 0 : 20 
                      }}
                      transition={{ delay: 0.6, duration: 0.5 }}
                      className="space-y-3"
                    >
                      <div className="text-gray-700 text-sm md:text-base leading-relaxed font-serif px-2">
                        <p className="mb-3 text-justify">
                          Айым, с момента нашего знакомства,
                           ты стала для меня самым теплым и 
                           прекрасным человеком на свете. 
                           Я влюбился не только во внешность, 
                           я полюбил человека с ценностями схожей с моей.
                            Я полюбил ту, чья улыбка делала мою жизнь ярче. 
                            Я полюбил человека с прекрасной душой и пониманием.
                          Я полюбил человека с железными принципами и амбициями. Я полюбил тебя, Айым, за то, кто ты есть, и за то, что ты делаешь мою жизнь лучше просто своим существованием.
                        </p>
                        <p className="mb-3 text-justify">
                          Смотря на тебя, у меня возникает желание стать лучше, чтобы сделать тебя счастливой. У меня серьезные намерения, поэтому хочу только одного. Довериться мне. Я буду доказывать свою искренность еще сто раз, если потребуется.


                        </p>

                        <p className="mb-3 text-justify">
                          Обычно я не могу вот так открыться кому то, 
                          но с тобой я чувствую себя настолько комфортно, что могу быть собой.
                          Да, я не идеальный и иногда ошибаюсь, даже туплю жестко. 
                          Но каждый раз, я пытаюсь быть таким человеком, который будет достойным. С которым ты будешь чувствовать себя в комфорте и безопасности. 
                        </p>
                        <p className="mb-3 text-justify">
                          Я хочу чтобы мы были вместе, сколько бы мне не пришлось трудиться.Ремарк писал: "Пока человек не сдается, он сильнее своей судьбы". Я хочу быть с тобой каждый миг и всегда. Обещаю, что буду самым надежным для тебя человеком. Буду выбирать тебя снова и снова.
                        </p>
                        <p className="text-rose-600 font-bold text-lg">
                          
                           С любовью, Рахат.
                        </p>
                        <p className="text-rose-600 font-bold text-lg">
                          
                            Я люблю тебя ♥
                        </p>
                      </div>
                    </motion.div>

                    <motion.div
                      className="flex gap-3 justify-center mt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isCardOpen ? 1 : 0 }}
                      transition={{ delay: 0.8 }}
                    >
                      <Heart size={16} className="text-rose-400" fill="currentColor" />
                      <Heart size={20} className="text-rose-500" fill="currentColor" />
                      <Heart size={16} className="text-rose-400" fill="currentColor" />
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Shadow */}
              <motion.div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-4 bg-black/20 rounded-full blur-xl"
                animate={{
                  scale: isCardOpen ? 0.8 : 1,
                  opacity: isCardOpen ? 0.1 : 0.2
                }}
              />
            </div>

            <motion.p
              className="text-white/80 text-center mt-8 text-sm md:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {isCardOpen ? 'Нажми снова, чтобы закрыть' : '💝 Кликни на открытку 💝'}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
