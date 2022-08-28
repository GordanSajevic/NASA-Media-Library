import NasaService from '../service/NasaService';

test('search function returns more than zero results for valid years', async () => {
    let nasaService = NasaService();
    let collection = await nasaService.search("space exploration", 
    new Date().getFullYear() - 10, new Date().getFullYear());
    expect(collection?.items?.length).toBeGreaterThan(0);
});

test('search function returns more than zero results without years', async () => {
    let nasaService = NasaService();
    let collection = await nasaService.search("space exploration", 0, 0);
    expect(collection?.items?.length).toBeGreaterThan(0);
});

test('search function return zero results for distant future', async () => {
    let nasaService = NasaService();
    let collection = await nasaService.search("space exploration", 
    new Date().getFullYear() + 50, new Date().getFullYear() + 100);
    expect(collection?.items?.length).toEqual(0);
});

test('search function return zero results for invalid years', async () => {
    let nasaService = NasaService();
    let collection = await nasaService.search("space exploration", 2022, 2012);
    expect(collection?.items?.length).toEqual(0);
});

test('getJsonImages function return more than zero results', async () => {
    let nasaService = NasaService();
    let collection = await nasaService.search("space exploration", 
    new Date().getFullYear() - 10, new Date().getFullYear());
    let item = await nasaService.getJsonImages(collection?.items[0])
    expect(item?.images?.length).toBeGreaterThan(0);
});

test('getJsonImages function return valid result', async () => {
    let nasaService = NasaService();
    let collection = await nasaService.search("space exploration", 
    new Date().getFullYear() - 10, new Date().getFullYear());
    let item = await nasaService.getJsonImages(collection?.items[0])
    expect(item?.images[0]).toContain("http://images-assets.nasa.gov/");
});