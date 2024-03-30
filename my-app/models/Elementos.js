const {Schema, model, models} = require('mongoose');

const ElementosSchema = new Schema({
    name: String,
    appearance: String,
    atomic_mass: Number,
    boil: Number,
    category: String,
    density: Number,
    discovered_by: String,
    melt: Number,
    molar_heat: Number,
    name_by: String,
    number: Number,
    period: Number,
    group: Number,
    phase: String,
    source: String,
    bohr_model_image: String,
    bohr_model_3d: String,
    spectral_img: String,
    summary: String,
    symbol: String,
    xpos: Number,
    ypos: Number,
    wxpos: Number,
    wypos: Number,

});

const Elementos = models?.Elementos || model('Elementos', ElementosSchema);
export default Elementos;