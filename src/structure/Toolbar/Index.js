import React from 'react';
import { Folder, Wab321018, FilePencil, Fontext2 } from '@react95/icons';
import { List } from '@react95/core';
import { TaskBar } from '@react95/core';
import Cursor from '../../atoms/Cursor/Index';
import ContainerToolBar from './Styles'
import useDesktop from '../../customHooks/useDesktop';
import useProject from '../../customHooks/useProject';
import useToolbar from '../../customHooks/useToolbar';

export default function Index() {

    const { openContact } = useDesktop();
    const { openProject } = useProject();
    const { openBlog } = useToolbar();

    return (
        <ContainerToolBar>


            <Cursor>
                <TaskBar

                    list={<List>
                        <List.Item onClick={openContact} icon={<Folder variant={'32x32_4'} />}>
                            Conctacto
                        </List.Item>
                        <List.Item onClick={openProject} icon={<Folder variant={'32x32_4'} />}>
                            Proyectos
                        </List.Item>
                        {/* <List.Item icon={<Fontext2 variant={'32x32_4'} />}>
                            descargar_cv.pdf
                        </List.Item> */}
                        <List.Item onClick={openBlog} icon={<FilePencil variant={'32x32_4'} />}>
                            Blog - dev.to
                        </List.Item>
                    </List>}
                />
            </Cursor>
        </ContainerToolBar>
    )
}
