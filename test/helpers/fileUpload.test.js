import { v2 as cloudinary } from 'cloudinary';
import { fileUpload } from '../../src/helpers/fileUpload';

cloudinary.config({
  cloud_name: 'dfid5lbcr',
  api_key: '665148587748572',
  api_secret: '17zcsK9al4J5tBdw9D-yj8M3J5k',
  secure: true,
});

describe('pruebas en fileUpload', () => {
  test('debe de subir el archivo correctamente', async () => {
    const imageUrl =
      'https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGhlJTIwc3VufGVufDB8fDB8fA%3D%3D&w=1000&q=80';
    const resp = await fetch(imageUrl);
    const blob = await resp.blob();
    const file = new File([blob], 'foto.jpg');

    const url = await fileUpload(file);
    expect(typeof url).toBe('string');
    const segments = url.split('/');
    const imageId = segments[segments.length - 1].replace('.jpg', '');
    const cloudResp = await cloudinary.api.delete_resources(
      ['journal/' + imageId],
      {
        resource_type: 'image',
      }
    );
  });

  test('debe retornal null', async () => {
    const file = new File([], 'foto.jpg');
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
