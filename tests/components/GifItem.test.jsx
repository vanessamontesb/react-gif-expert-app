import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas es <GifItem/>', () => {

    const title= 'Vanessa';
    const url= 'http://localhost/vanessa.com';
    
    test('Debe de hacer match con el snapshop', () => {
        const {container } = render( <GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot();
    });
    test('Debe mostrar la imagen con el URL y el ALT indicado ', () => {
        render( <GifItem title={title} url={url}/>);
        //screen.debug()
        const { src , alt} = screen.getByRole('img');
        expect( src).toBe(url);
        expect( alt).toBe(title);
    });
    test('Debe mostrar el titulo en el componente ', () => {
        render( <GifItem title={title} url={url}/>);
        expect (screen.getByText( title).toBeTrue)
    });

});
