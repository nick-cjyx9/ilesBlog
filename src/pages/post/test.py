import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# 基本参数
L = 1.0  # 弦长（归一化到 1）
v = 1.0  # 传播速度
T = 2.0  # 模拟时间
frames = 100  # 动画帧数
n_modes = 5  # 叠加的泛音数量

plt.rcParams['font.family'] = 'microsoft yahei'

# 时间和空间离散化
x = np.linspace(0, L, 100)  # 100 个位置点
t = np.linspace(0, T, frames)  # 100 个时间点

# 计算振动模式
def guitar_string_vibration(x, t, n_modes=5):
    u = np.zeros_like(x)
    for n in range(1, n_modes + 1):
        A_n = 1 / n  # 振幅按 1/n 衰减，模拟物理上的泛音衰减
        omega_n = n * np.pi * v / L  # 角频率
        u += A_n * np.cos(omega_n * t) * np.sin(n * np.pi * x / L)
    return u

# 初始化动画
fig, ax = plt.subplots()
line, = ax.plot(x, guitar_string_vibration(x, 0, n_modes), 'b-', lw=2)
ax.set_ylim(-2, 2)
ax.set_xlabel("位置 x")
ax.set_ylabel("振动 u(x,t)")
ax.set_title("吉他弦的振动模拟")

# 更新函数
def update(frame):
    u = guitar_string_vibration(x, t[frame], n_modes)
    line.set_ydata(u)
    return line,

# 生成动画
ani = animation.FuncAnimation(fig, update, frames=frames, interval=30, blit=True)

plt.show()
