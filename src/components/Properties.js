import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useGlobalContext } from '../context';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Properties() {
  const {open,handleClose,pokemon} = useGlobalContext()
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {(!pokemon) ? "" : (
            <>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <div className="abilities">
                        {
                            pokemon.abilities.map(poke=>{
                                return(
                                    <>
                                     <div className="group">
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                    </>
                                )
                            })
                        }
                    </div>
                    <div className="base-stat">
                        {
                            pokemon.stats.map(poke=>{
                                return(
                                    <>
                                        <h3>{poke.stat.name}:{poke.base_stat}</h3>
                                    </>
                                )
                            })
                        }
                    </div>
                </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
