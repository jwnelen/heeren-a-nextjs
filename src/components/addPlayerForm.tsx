import React, { FormEvent, useState } from 'react';

import Button from '@/components/buttons/Button';

import { Player } from '@/types';

type formProps = {
  onSubmit: (p: Player) => void;
};

type textInputProps = {
  label: string;
  placeholder: string;
  type: string;
  value: string | number;
  inputPattern?: string;
};

export const AddPlayerForm = ({ onSubmit }: formProps) => {
  const [player, setPlayer] = useState<Player>({
    name: '',
    nickname: '',
    singles_rating: 0,
    doubles_rating: 0,
    singles_rating_year: 0,
    doubles_rating_year: 0,
  });

  const submitting = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(player);
  };

  const TextInput = ({
    label,
    placeholder,
    value,
    type,
    inputPattern,
  }: textInputProps) => {
    return (
      <div>
        <label htmlFor={label} className='block font-medium text-gray-700'>
          {placeholder}
        </label>
        <input
          type={type}
          value={value}
          onChange={(e) => {
            setPlayer({ ...player, [label]: e.target.value });
          }}
          name={label}
          pattern={inputPattern ? inputPattern : undefined}
          id={`${label}`}
          required
          placeholder={placeholder}
        ></input>
      </div>
    );
  };

  return (
    <form
      onSubmit={submitting}
      className='w-fit space-y-4 rounded-lg bg-blue-100 p-8 px-8'
    >
      <div>
        {TextInput({
          label: 'name',
          value: player.name,
          type: 'text',
          placeholder: 'Name',
        })}
      </div>
      <div>
        {TextInput({
          label: 'nickname',
          value: player.nickname,
          type: 'text',
          placeholder: 'Nickname',
        })}
      </div>
      <div className='flex flex-row justify-center'>
        {TextInput({
          label: 'singles_rating',
          value: player.singles_rating,
          type: 'number',
          placeholder: 'Actuele rating enkels',
        })}
        {TextInput({
          label: 'doubles_rating',
          value: player.doubles_rating,
          type: 'number',
          placeholder: 'Actuele rating dubbel',
        })}
      </div>
      <div className='flex flex-row justify-center'>
        {TextInput({
          label: 'singles_rating_year',
          value: player.singles_rating_year,
          type: 'number',
          inputPattern: '[1-9]{1}',
          placeholder: 'Eindejaars rating enkels',
        })}
        {TextInput({
          label: 'doubles_rating_year',
          value: player.doubles_rating_year,
          inputPattern: '[1-9]{1}',
          type: 'number',
          placeholder: 'Eindejaars rating dubbel',
        })}
      </div>
      <Button type='submit'>Add player</Button>
    </form>
  );
};
