"use client" // agar dibuat menjadi client component

import { useState } from "react";

// > Client Component
// => Biasanya ada interaksi kepada pengguna.
// => Seperti memasukan data kedalam inputan.
// => User bisa click, dll
const Calculator = () => {
  const [angkaSatu, setAngkaSatu] = useState(0);
  const [angkaDua, setAngkaDua] = useState(0);
  const [hasil, setHasil] = useState(0);
  
  const handleSubmitCalculator = (event) => {
    event.preventDefault();

    const hasilJumlah = angkaSatu + angkaDua;
    // console.info(hasilJumlah, '=> hasil jumlah');

    setHasil(hasilJumlah);
  };

  return (
    <>
      <form onSubmit={ handleSubmitCalculator }>
        <input type="text" placeholder="Angka 1" onChange={ (e) => setAngkaSatu(parseInt(e.target.value)) } /> <br />
        <input type="text" placeholder="Angka 2" onChange={ (e) => setAngkaDua(parseInt(e.target.value)) } /> <br />
        <button>Jumlahkan</button>
        <p>Hasil: { hasil }</p>
      </form>
    </>
  );
}

export default Calculator;
