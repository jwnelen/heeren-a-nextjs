import React, { FormEvent, useState } from 'react';

import Button from '@/components/buttons/Button';

import { Player } from '@/types';

type formProps = {
  onSubmit: (p: Player) => void;
};

const defaultPlayer: Player = {
  name: '',
  nickname: '',
  singles_rating: 2,
  doubles_rating: 2,
  singles_rating_year: 2,
  doubles_rating_year: 2,
};

type textInputProps = {
  label: string;
  placeholder: string;
  type: string;
  value: string | number;
  inputPattern?: string;
};

export const AddPlayerForm = ({ onSubmit }: formProps) => {
  const [player, setPlayer] = useState<Player>(defaultPlayer);

  const submitting = (e: FormEvent) => {
    e.preventDefault();

    setPlayer((prevState) => ({
      ...prevState,
      singles_rating: parseFloat(prevState.singles_rating.toString()),
      doubles_rating: parseFloat(prevState.doubles_rating.toString()),
      singles_rating_year: parseInt(prevState.singles_rating_year.toString()),
      doubles_rating_year: parseInt(prevState.doubles_rating_year.toString()),
    }));

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
            const newVal =
              type === 'number'
                ? parseFloat(e.target.value)
                : e.target.value || '';
            setPlayer({ ...player, [label]: newVal });
          }}
          name={label}
          pattern={inputPattern ? inputPattern : undefined}
          id={`${label}`}
          required={true}
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
      <div className='flex flex-row items-center justify-center gap-2'>
        {TextInput({
          label: 'name',
          value: player.name,
          type: 'text',
          placeholder: 'Naam',
        })}
        {TextInput({
          label: 'nickname',
          value: player.nickname,
          type: 'text',
          placeholder: 'Nickname',
        })}
      </div>
      <div className='flex flex-row items-center justify-center gap-2'>
        {TextInput({
          label: 'singles_rating',
          value: player.singles_rating.toString(),
          inputPattern: '[1-9]{1}',
          type: 'number',
          placeholder: 'Actuele rating enkels',
        })}
        {TextInput({
          label: 'doubles_rating',
          value: player.doubles_rating.toString(),
          inputPattern: '[1-9]{1}',
          type: 'number',
          placeholder: 'Actuele rating dubbel',
        })}
      </div>
      <div className='flex flex-row items-center justify-center gap-2'>
        {TextInput({
          label: 'singles_rating_year',
          value: player.singles_rating_year,
          type: 'number',
          placeholder: 'Eindejaars rating enkels',
        })}
        {TextInput({
          label: 'doubles_rating_year',
          value: player.doubles_rating_year,
          type: 'number',
          placeholder: 'Eindejaars rating dubbel',
        })}
      </div>
      <Button type='submit'>Add player</Button>
    </form>
  );
};
