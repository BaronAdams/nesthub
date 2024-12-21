import React, { useState } from 'react';

type PhoneInputProps = React.HTMLAttributes<HTMLInputElement> & {
  name?: string; // Permet de passer un nom personnalisé
  id?: string;   // Permet de passer un ID personnalisé
};

const PhoneInput: React.FC<PhoneInputProps> = ({ name, id, ...props }) => {
  const [phone, setPhone] = useState<string>('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let numericPhone = value.replace(/[^0-9]/g, '');

    if (numericPhone.length <= 9) setPhone(numericPhone);
  };

  return (
    <>
      <label className="font-medium" htmlFor={id || 'phone'}>
        Votre numéro de téléphone:
      </label>
      <input
        type="text"
        value={phone}
        onChange={handleChange}
        className="form-input mt-2 bg-transparent"
        maxLength={9}
        placeholder="Entrez votre numéro ici"
        name={name || 'phone'} // Utilise une valeur par défaut si `name` n'est pas fourni
        id={id || 'phone'} // Utilise une valeur par défaut si `id` n'est pas fourni
        {...props}
      />
    </>
  );
};

export default PhoneInput;
