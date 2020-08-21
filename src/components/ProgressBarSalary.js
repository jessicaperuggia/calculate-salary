import React from 'react';

export default function ProgressBarSalary(props) {

    const { inss, irpf, netSalary, colorINSS = 'orange', colorIRPF = 'red', colorNetSalary = 'green' } = props;

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
            <div
                style={{
                    backgroundColor: colorINSS,
                    width: inss + '%',
                    height: '20px',
                }} />
            <div
                style={{
                    backgroundColor: colorIRPF,
                    width: irpf + '%',
                    height: '20px',
                }} />
            <div
                style={{
                    backgroundColor: colorNetSalary,
                    width: netSalary + '%',
                    height: '20px',
                }} />

        </div>
    );

}
