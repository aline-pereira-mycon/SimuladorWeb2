import React from 'react'
import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import { FormControl, Stack } from '@mui/material'
import ContinueButton from '@/components/Buttons/ContinueButton'

export default function FormCadastro () {

    return (
        <Box sx={ { width: '100%' } }>
            <form>
                <Stack spacing={ 2 }>
                    <FormControl>
                        <TextField
                            required
                            focused
                            name="nome"
                            label="Qual o seu nome?"
                            fullWidth
                            variant="standard"
                            placeholder="Seu nome"
                            color="secondary"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            required
                            focused
                            name="email"
                            label="Qual o seu melhor e-mail?"
                            fullWidth
                            variant="standard"
                            placeholder="email@email.com"
                            color="secondary"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            required
                            focused
                            fullWidth
                            color="secondary"
                            variant="standard"
                            label="Qual seu número de celular?"
                            placeholder="(00) 00000-0000"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            required
                            focused
                            label="Qual seu CEP"
                            fullWidth
                            variant="standard"
                            placeholder="12345-678"
                            color="secondary"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            required
                            focused
                            label="Qual é a sua renda mensal?"
                            fullWidth
                            variant="standard"
                            placeholder="R$ 0,00"
                            color="secondary"
                            helperText="Você pode somar seu salário com outros membros da família e incluir rendas extras."
                            slotProps={ {
                                formHelperText: {
                                    sx: {
                                        color: '#3A4156',
                                        fontSize: '.62rem',
                                        lineHeight: '1.1',
                                        mt: 1,
                                        fontStyle: 'italic',
                                    },
                                },
                            } }
                        />
                    </FormControl>
                    <FormControl>
                        <Grid container rowSpacing={ 0 } sx={ { alignItems: 'center', mb: 3 } }>
                            <Grid size={ 1 }>
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            color="secondary"
                                            name="termos"
                                        />
                                    }
                                    label=""
                                />
                            </Grid>
                            <Grid size={ 11 }>
                                <Typography
                                    sx={ {
                                        fontSize: '.7rem',
                                        color: '#0A0D13',
                                        lineHeight: '1.1',
                                        mt: '5px',
                                    } }
                                >Li e aceito os <a href='hhttps://www.mycon.com.br/termos-de-uso' target='_blank' className="links">Termos de Uso</a> e <a href='https://www.mycon.com.br/politica-de-privacidade' target='_blank' className="links">Política de Privacidade</a> e declaro que meus dados estão corretos.
                                </Typography>

                            </Grid>
                        </Grid>
                    </FormControl>
                </Stack>
                <Box>
                    <ContinueButton
                        text="ver planos"
                        rota="/planos"
                    />
                </Box>
            </form>
        </Box >
    )
}