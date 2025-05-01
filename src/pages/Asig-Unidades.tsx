import { DashboardLayout } from '../lib/Layouts/DashboardLayout';
import { Select } from '../components/Select/Select';

export const AsigUnidades = () => {
  const opciones = ['test', 'prepareAutoBatched', 'testeando', 'etc']
  const handleSelectChange = (value:string) => {
    console.log(value)
  }

  return (
    <DashboardLayout>
      <div className='center'>
      <Select
      options={opciones}
      label='HOlaaaa'
      onSelect={handleSelectChange}
      />
      </div>
    </DashboardLayout>
  );
};