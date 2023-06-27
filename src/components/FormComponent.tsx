import { useState } from 'react';
import { Button, Label, TextInput, Select } from 'flowbite-react';

export default function CalculatorForm() {
  const [rasOffensive, setRasOffensive] = useState('');
  const [jumlahEliteOffensive, setJumlahEliteOffensive] = useState('');
  const [jumlahSpesialisOffensive, setJumlahSpesialisOffensive] = useState('');
  const [totalPointOffensive, setTotalPointOffensive] = useState(0);
  const [rasDefensive, setRasDefensive] = useState('');
  const [jumlahEliteDefensive, setJumlahEliteDefensive] = useState('');
  const [jumlahSpesialisDefensive, setJumlahSpesialisDefensive] = useState('');
  const [totalPointDefensive, setTotalPointDefensive] = useState(0);

  const calculatePoint1 = (e:any) => {
    e.preventDefault();
    let elitePointOffensive = 0;
    let spesialisPointOffensive = 0;
    

    switch (rasOffensive) {
      case 'Avian':
        elitePointOffensive = parseInt(jumlahEliteOffensive) * 10;
        spesialisPointOffensive = parseInt(jumlahSpesialisOffensive) * 13;
        break;
      case 'Elf':
        elitePointOffensive = parseInt(jumlahEliteOffensive) * 10;
        spesialisPointOffensive = parseInt(jumlahSpesialisOffensive) * 8;
        break;
      case 'Troll':
        elitePointOffensive = parseInt(jumlahEliteOffensive) * 10;
        spesialisPointOffensive = parseInt(jumlahSpesialisOffensive) * 11;
        break;
      case 'Human':
        elitePointOffensive = parseInt(jumlahEliteOffensive) * 10;
        spesialisPointOffensive = parseInt(jumlahSpesialisOffensive) * 7;
        break;
      default:
        break;
    }
    const totalOffensive = elitePointOffensive + spesialisPointOffensive;
    setTotalPointOffensive(totalOffensive);
};
    const calculatePoint2 = (e:any) => {
        e.preventDefault();
        let elitePointDefensive = 0;
    let spesialisPointDefensive = 0;

    switch (rasDefensive) {
        case 'Avian':
          elitePointDefensive = parseInt(jumlahEliteDefensive) * 10;
          spesialisPointDefensive = parseInt(jumlahSpesialisDefensive) * 8;
          break;
        case 'Elf':
          elitePointDefensive = parseInt(jumlahEliteDefensive) * 10;
          spesialisPointDefensive = parseInt(jumlahSpesialisDefensive) * 13;
          break;
        case 'Troll':
          elitePointDefensive = parseInt(jumlahEliteDefensive) * 10;
          spesialisPointDefensive = parseInt(jumlahSpesialisDefensive) * 7;
          break;
        case 'Human':
          elitePointDefensive = parseInt(jumlahEliteDefensive) * 10;
          spesialisPointDefensive = parseInt(jumlahSpesialisDefensive) * 11;
          break;
        default:
          break;
      }

    const totalDefensive = elitePointDefensive + spesialisPointDefensive;
    setTotalPointDefensive(totalDefensive);
  };

  return (
    <div className="flex justify-center items-center mt-4 mt-40">
    <div className="grid grid-cols-2 gap-4 justify-center items-center">
      <div className="bg-white rounded-lg shadow px-8 pb-6">
      <h2 className="text-1xl text-gray-800 font-semibold items-center">Poin Serangan</h2>
        <form className="flex flex-col gap-4 items-left">
          <div className="max-w-md" id="select">
            <div className="text-white mb-2 block">
              <Label htmlFor="countries" value="Pilih rasmu" className="text-black mb-2 block" />
            </div>
            <Select id="countries" value={rasOffensive} onChange={(e) => setRasOffensive(e.target.value)} required>
              <option>Avian</option>
              <option>Elf</option>
              <option>Troll</option>
              <option>Human</option>
            </Select>
          </div>
          <div>
            <div className="text-white mb-2 block">
              <Label htmlFor="elite" value="Jumlah Elite" className="text-black" />
            </div>
            <TextInput
              id="elite"
              value={jumlahEliteOffensive}
              onChange={(e) => setJumlahEliteOffensive(e.target.value)}
              required
                type="number"
                className="text-white mr-6"
            />
          </div>
          <div>
            <div className="text-white mb-2 block">
              <Label htmlFor="spesialis" value="Jumlah Spesialis" className="text-black" />
            </div>
            <TextInput
              id="spesialis"
              value={jumlahSpesialisOffensive}
              onChange={(e) => setJumlahSpesialisOffensive(e.target.value)}
              required
                type="number"
                className="text-white mr-5"
            />
          </div>
          <Button type="submit" onClick={calculatePoint1}>
            Calculate
          </Button>
          {totalPointOffensive !== 0 && (
            <Label htmlFor="total1" value={`Total Point Penyerangan: ${totalPointOffensive}`} className="text-black" />
          )}
            {totalPointOffensive == 0 && (
              <span  className="py-0" >-</span>
            
          )}
        </form>
      </div>

      <div className="bg-white rounded-lg shadow px-8 pb-6 ">
      <h2 className="text-1xl text-gray-800 font-semibold justify-center">Poin Pertahanan</h2>
        <form className="flex flex-col gap-4 items-left">
          <div className="max-w-md" id="select">
            <div className="text-white mb-2 block">
              <Label htmlFor="countries" value="Pilih rasmu" className="text-black mb-2 block" />
            </div>
            <Select id="countries" value={rasDefensive} onChange={(e) => setRasDefensive(e.target.value)} required>
              <option>Avian</option>
              <option>Elf</option>
              <option>Troll</option>
              <option>Human</option>
            </Select>
          </div>
          <div>
            <div className="text-white mb-2 block">
              <Label htmlFor="elite" value="Jumlah Elite" className="text-black" />
            </div>
            <TextInput
              id="elite"
              value={jumlahEliteDefensive}
              onChange={(e) => setJumlahEliteDefensive(e.target.value)}
              required
                type="number"
                className="text-white mr-6"
            />
          </div>
          <div>
            <div className="text-white mb-2 block">
              <Label htmlFor="spesialis" value="Jumlah Spesialis" className="text-black" />
            </div>
            <TextInput
              id="spesialis"
              value={jumlahSpesialisDefensive}
              onChange={(e) => setJumlahSpesialisDefensive(e.target.value)}
              required
                type="number"
                className="text-white mr-6"
            />
          </div>
          <Button type="submit" onClick={calculatePoint2}>
            Calculate
          </Button>
                {totalPointDefensive !== 0 && (
            <Label htmlFor="total2" value={`Total Point Pertahanan: ${totalPointDefensive}`} className="text-black w-100" />
            
          )}
            {totalPointDefensive == 0 && (
              <span>-</span>
            
          )}
        </form>
      </div>
    </div>
  </div>
  );
}
