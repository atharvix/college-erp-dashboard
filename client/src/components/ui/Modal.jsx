import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Modal({ isOpen, onClose, title, description, children, maxWidth = 'max-w-lg' }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <AnimatePresence>
        {isOpen && (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
              >
                <Dialog.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 10 }}
                    transition={{ type: 'spring', duration: 0.3 }}
                    className={`w-full ${maxWidth} bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl relative focus:outline-none`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        {title && (
                          <Dialog.Title className="text-xl font-bold text-slate-100">
                            {title}
                          </Dialog.Title>
                        )}
                        {description && (
                          <Dialog.Description className="text-sm text-slate-400 mt-1">
                            {description}
                          </Dialog.Description>
                        )}
                      </div>
                      <Dialog.Close asChild>
                        <button
                          onClick={onClose}
                          className="text-slate-400 hover:text-slate-200 p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    <div className="mt-2">{children}</div>
                  </motion.div>
                </Dialog.Content>
              </motion.div>
            </Dialog.Overlay>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
