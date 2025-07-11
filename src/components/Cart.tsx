import React, { useState } from 'react';
import { 
  X, 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2,
  CreditCard,
  Smartphone,
  Wallet,
  CheckCircle
} from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart: React.FC = () => {
  const { state, removeItem, updateQuantity, clearCart, closeCart, getTotalPrice } = useCart();
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'Tarjeta de Crédito/Débito',
      icon: <CreditCard className="w-5 h-5" />,
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'mobile-payment',
      name: 'Pago Móvil',
      icon: <Smartphone className="w-5 h-5" />,
      description: 'Transferencias bancarias móviles'
    },
    {
      id: 'digital-wallet',
      name: 'Billetera Digital',
      icon: <Wallet className="w-5 h-5" />,
      description: 'PayPal, Apple Pay, Google Pay'
    }
  ];

  const handlePayment = () => {
    if (!selectedPaymentMethod) {
      alert('Por favor selecciona un método de pago');
      return;
    }

    setIsProcessing(true);
    
    // Simular procesamiento de pago
    setTimeout(() => {
      setIsProcessing(false);
      setIsCompleted(true);
      
      // Simular éxito del pago
      setTimeout(() => {
        clearCart();
        closeCart();
        setIsCompleted(false);
        setSelectedPaymentMethod('');
      }, 2000);
    }, 2000);
  };

  if (!state.isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="w-6 h-6 text-slate-700" />
            <h2 className="text-xl font-bold text-slate-900">Carrito de Compras</h2>
            <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded-full text-sm font-medium">
              {state.items.length} {state.items.length === 1 ? 'curso' : 'cursos'}
            </span>
          </div>
          <button
            onClick={closeCart}
            className="text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {state.items.length === 0 ? (
            <div className="text-center py-12">
              <ShoppingCart className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Tu carrito está vacío</h3>
              <p className="text-slate-600">Agrega algunos cursos para comenzar</p>
            </div>
          ) : (
            <div className="space-y-4">
              {state.items.map((item) => (
                <div key={item.course.id} className="flex items-center space-x-4 p-4 border border-slate-200 rounded-lg">
                  <img 
                    src={item.course.image} 
                    alt={item.course.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900">{item.course.title}</h3>
                    <p className="text-sm text-slate-600">{item.course.level}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.course.id, item.quantity - 1)}
                        className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.course.id, item.quantity + 1)}
                        className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-slate-900">{item.course.price}</div>
                    <button
                      onClick={() => removeItem(item.course.id)}
                      className="text-red-500 hover:text-red-700 transition-colors mt-1"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Payment Methods */}
        {state.items.length > 0 && (
          <div className="border-t border-slate-200 p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Método de Pago</h3>
            <div className="space-y-3 mb-6">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center space-x-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                    selectedPaymentMethod === method.id
                      ? 'border-slate-700 bg-slate-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={selectedPaymentMethod === method.id}
                    onChange={(e) => setSelectedPaymentMethod(e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-slate-700">{method.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-slate-900">{method.name}</div>
                    <div className="text-sm text-slate-600">{method.description}</div>
                  </div>
                  {selectedPaymentMethod === method.id && (
                    <CheckCircle className="w-5 h-5 text-slate-700" />
                  )}
                </label>
              ))}
            </div>

            {/* Total */}
            <div className="border-t border-slate-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-slate-900">Total:</span>
                <span className="text-2xl font-bold text-slate-900">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-3">
              <button
                onClick={clearCart}
                className="flex-1 px-4 py-3 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Vaciar Carrito
              </button>
              <button
                onClick={handlePayment}
                disabled={isProcessing || !selectedPaymentMethod}
                className={`flex-1 px-4 py-3 rounded-lg font-semibold transition-colors ${
                  isProcessing || !selectedPaymentMethod
                    ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                    : 'bg-slate-700 text-white hover:bg-slate-800'
                }`}
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Procesando...</span>
                  </div>
                ) : isCompleted ? (
                  <div className="flex items-center justify-center space-x-2">
                    <CheckCircle className="w-4 h-4" />
                    <span>¡Pago Exitoso!</span>
                  </div>
                ) : (
                  'Pagar Ahora'
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart; 